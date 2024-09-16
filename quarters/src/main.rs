use serde::{Deserialize, Serialize};
use serde_json::Result;
use strum::IntoEnumIterator;
use strum_macros::{EnumIter, EnumString};
use std::collections::HashMap;
use std::str::FromStr;
use std::{fs, hash};
use lazy_static::lazy_static;
use regex::Regex;

fn uncamelcase(s: &str) -> String {
    lazy_static! {
        static ref re: Regex = Regex::new("([A-Z]+|[a-z])([A-Z])").unwrap();
    };

    let newS = re.replace_all(s, "$1 $2");

    newS.to_string()
}

fn capitalize(s: &str) -> String {
    let mut c = s.chars();
    match c.next() {
        None => String::new(),
        Some(f) => f.to_uppercase().collect::<String>() + c.as_str(),
    }
}

enum QuarterAction {
    Add,
    Replace,
    Reject,
    Expansion,
}

#[derive(Debug, EnumIter, Copy, Clone, Serialize, Deserialize, PartialEq, Eq, Hash)]
enum Women {
    MayaAngelou,
    SallyRide,
    WilmaMankiller,
    NinaOteroWarren,
    AnnaMayWong,
    BessieColeman,
    EdithKanakaole,
    EleanorRoosevelt,
    JovitaIdar,
    MariaTallchief,
    PauliMurray,
    PatsyTakemotoMink,
    MaryEdwardsWalker,
    CeliaCruz,
    ZitkalaSa,
    IdaBWells,
    JulietteGordonLow,
    VeraRubin,
    StacyMilbern,
    AltheaGibson,
}

#[derive(Debug, EnumIter, Copy, Clone, Serialize, Deserialize, PartialEq, Eq, Hash)]
enum State {
    Delaware,
    Pennsylvania,
    NewJersey,
    Georgia,
    Connecticut,
    Massachusetts,
    Maryland,
    SouthCarolina,
    NewHampshire,
    Virginia,
    NewYork,
    NorthCarolina,
    RhodeIsland,
    Vermont,
    Kentucky,
    Tennessee,
    Ohio,
    Louisiana,
    Indiana,
    Mississippi,
    Illinois,
    Alabama,
    Maine,
    Missouri,
    Arkansas,
    Michigan,
    Florida,
    Texas,
    Iowa,
    Wisconsin,
    California,
    Minnesota,
    Oregon,
    Kansas,
    WestVirginia,
    Nevada,
    Nebraska,
    Colorado,
    NorthDakota,
    SouthDakota,
    Montana,
    Washington,
    Idaho,
    Wyoming,
    Utah,
    Oklahoma,
    NewMexico,
    Arizona,
    Alaska,
    Hawaii,
    DistrictOfColumbia,
    PuertoRico,
    Guam,
    AmericanSamoa,
    USVirginIslands,
    NorthernMarianaIslands,
}

#[derive(Debug, Copy, Clone, Serialize, Deserialize, PartialEq, Eq, Hash)]
enum QType {
    State(State),
    AmericaTheBeautiful(State),
    Year(u32),
    Women(Women),
}

// this is a bad but I don't care
impl QType {
    pub fn pretty(self) -> String {
        match self {
            QType::State(s) => uncamelcase(&format!("{:?}", s)),
            QType::AmericaTheBeautiful(s) => uncamelcase(&format!("{:?} (America the Beautiful)", s)),
            QType::Year(y) => format!("{}", y),
            QType::Women(w) => uncamelcase(&format!("{:?}", w)),
        }
    }
}

#[derive(Debug, EnumIter, Clone, Serialize, Deserialize, PartialEq, Eq, Hash)]
enum Mint {
    P,
    D,
}

#[derive(Debug, EnumString, Clone, Serialize, Deserialize, PartialEq, PartialOrd, Eq, Ord)]
enum Condition {
    Bad,
    Good,
    Great,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq, Hash)]
struct QuarterId {
    kind: QType,
    mint: Mint,
}

struct Quarter {
    id: String,
    condition: Condition,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
struct QuarterCollection {
    slots: HashMap<String, Option<Condition>>
}

impl QuarterCollection {
    pub fn add(&mut self, q: Quarter) -> QuarterAction {
        match self.slots.get_mut(&q.id) {
            Some(Some(existing)) => {
                if *existing >= q.condition {
                    QuarterAction::Reject
                } else {
                    *existing = q.condition;
                    QuarterAction::Replace
                }
            }
            Some(slot @ None) => {
                *slot = Some(q.condition);
                QuarterAction::Add
            }
            None => {
                self.slots.insert(q.id, Some(q.condition));
                QuarterAction::Expansion
            }
        }
    }

    pub fn add_slot(&mut self, id: String, condition: Option<Condition>) {
        match self.slots.get_mut(&id) {
            None => {self.slots.insert(id, condition);},
            Some(c) => {}
        }
    }

    pub fn correct(&mut self, q: Quarter) -> Option<()> {
        match self.slots.get_mut(&q.id) {
            Some(_) => self.slots.insert(q.id, Some(q.condition)),
            None => {return None}
        };
        
        Some(())
    }

    pub fn export(&self) {

        let mut collection_vec: Vec<(&String, &Option<Condition>)> = self.slots.iter()
                                                                            .collect();

        collection_vec.sort();

        // for i in &collection_vec {
        //     println!("{:?}", i)
        // }
        
        let write_str = serde_json::to_string(&collection_vec)
                                            .expect("Can't construct JSON");

        let _ = fs::write("../quarters.json", write_str)
                .expect("write to file.");
    }

    pub fn import(&mut self) {

        let strin = fs::read_to_string("../quarters.json").expect("read from file");

        let collection_vec: Vec<(String, Option<Condition>)> = serde_json::from_str(&strin).expect("unpack the json to collection");

        for item in collection_vec {
            self.add_slot(item.0, item.1);
        }
    }
}

fn generate_collection(collection: &mut QuarterCollection) {

    // Generate complete collection
    for m in Mint::iter() {
        for st in State::iter() {
            collection.add_slot(QType::State(st).pretty() + &format!(" {:?}", m), None);
            collection.add_slot(QType::AmericaTheBeautiful(st).pretty() + &format!(" {:?}", m), None);
        }

        for w in Women::iter() {
            collection.add_slot(QType::Women(w).pretty() + &format!(" {:?}", m), None);
        }

        //#[allow(unused_parens)]
        for y in 1960..=2024 {
            collection.add_slot(QType::Year(y).pretty() + &format!(" {:?}", m), None);
        }
    }
}

fn test_collection() {
    let mut collection =  QuarterCollection{ slots: HashMap::new() };
    
    generate_collection(&mut collection);
    generate_collection(&mut collection);

    collection.add(
        Quarter {
            id: String::from("1941 D"),
            condition: Condition::Great
        });

    collection.add(
        Quarter {
            id: String::from("2003 P"), 
            condition: Condition::Great
        });

    generate_collection(&mut collection);
}

fn main() {

    let mut collection =  QuarterCollection{ slots: HashMap::new() };
    collection.import();
    generate_collection(&mut collection);



    // println!("{}", &collection.slots.len());



    let args: Vec<String> = std::env::args().collect();

    match args.len() {
        1 => {
            for i in collection.slots.iter() {
                if i.1 != &None {
                    println!("{:?}", i);
                }
           }
        },
        _ => {
            if args[1] == "add" {
                let condition_str = &args[args.len() - 1];
                let id: String = args[2..(args.len() - 1)].join(" ");

                match collection.slots.get(&id) {
                    None => {println!("Slot \"{}\" does not exist", id); std::process::exit(1);}
                    Some(_) => {},
                };
                
                let condition = match Condition::from_str(&capitalize(&condition_str)) {
                    Ok(c) => c,
                    Err(_) => {println!("Could not derive condition from {}", condition_str); std::process::exit(1)},
                };


        
                let q = Quarter {
                    id: id,
                    condition: condition,
                };
                
                collection.add(q);
                // let result = match collection.add(q) {
                //     QuarterAction::Add => "Added Quarter.",
                //     QuarterAction::Replace => "Replaced Quarter.",
                //     QuarterAction::Reject => "Rejected Quarter.",
                //     QuarterAction::Expansion => "Added new slot.",
                // };

                // println!("{}", result)

            } else if args[1] == "correct" {
                let condition_str = &args[args.len() - 1];
                let id: String = args[2..(args.len() - 1)].join(" ");

                match collection.slots.get(&id) {
                    None => {println!("Slot \"{}\" does not exist", id); std::process::exit(1);}
                    Some(_) => {},
                };
                
                let condition = match Condition::from_str(&capitalize(&condition_str)) {
                    Ok(c) => c,
                    Err(_) => {println!("Could not derive condition from {}", condition_str); std::process::exit(1)},
                };

                let q = Quarter {
                    id: id,
                    condition: condition,
                };
  
                collection.correct(q);
                
            } else if args[1] == "add_slot" {
                let id: String = args[2..(args.len())].join(" ");

                match collection.slots.get(&id) {
                    Some(_) => {println!("Slot \"{}\" already exists", id); std::process::exit(1);}
                    None => {},
                };

                if !(id.ends_with(" D") || id.ends_with(" P")) {
                    println!("There is no mint mark at the end.");
                    std::process::exit(1)
                }

                collection.add_slot(id, None)

            } else if args[1] == "remove_slot" {
                let id: String = args[2..(args.len())].join(" ");

                match collection.slots.remove(&id) {
                    None => {println!("Slot \"{}\" did not exist", id); std::process::exit(1);},
                    Some(_) => {println!("Removed \"{}\"", id)}
                };
        
            } else if args[1] == "clear" {
                collection.slots.clear();
                println!("Cleared all quarters and slots")

            } else {
                println!("Unknown command {}", args[1]);
            }
        }
    }

    

    collection.export();
}
