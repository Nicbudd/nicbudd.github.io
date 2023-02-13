use serde::{Deserialize, Serialize};
use serde_json::Result;
use strum::IntoEnumIterator;
use strum_macros::EnumIter;
use std::collections::HashMap;
use std::fs;

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

#[derive(Debug, EnumIter, Clone, Serialize, Deserialize, PartialEq, Eq, Hash)]
enum Mint {
    P,
    D,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, PartialOrd, Eq, Ord)]
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
    id: QuarterId,
    condition: Condition,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
struct QuarterCollection {
    slots: HashMap<QuarterId, Option<Condition>>
}

impl QuarterCollection {
    pub fn add(&mut self, q: Quarter) -> QuarterAction {
        let Some(entry) = self.slots.get_mut(&q.id) else {
            self.slots.insert(q.id, Some(q.condition));
            return QuarterAction::Expansion;
        };

        if let Some(existing) = entry {
            if *existing >= q.condition {
                QuarterAction::Reject
            } else {
                *existing = q.condition;
                QuarterAction::Replace 
            }
        } else {
            *entry = Some(q.condition);
            QuarterAction::Add
        }
    }

    pub fn save(self) -> Result<Type> {

        let collection_vec = self.slots.iter().collect::<Vec<(QuarterId, Option<Condition>)>>();

        let write_str = serde_json::to_string(collection_vec)
                                            .expect("Can't construct JSON");

        let _ = fs::write("../quarters.json", write_str)
                .expect("Can't write to file.");
    }
}

fn generate_collection() -> QuarterCollection {

    let mut collection: QuarterCollection = QuarterCollection{ slots: HashMap::new() };

    // Generate complete collection
    for m in Mint::iter() {
        for st in State::iter() {
            collection.slots.insert(QuarterId{ kind: QType::State(st), mint: m.clone() }, None);
            collection.slots.insert(QuarterId{ kind: QType::AmericaTheBeautiful(st), mint: m.clone() }, None);
        }

        for w in Women::iter() {
            collection.slots.insert(QuarterId{ kind: QType::Women(w), mint: m.clone() }, None);
        }

        //#[allow(unused_parens)]
        for y in (1960..=2023) {
            collection.slots.insert(QuarterId{ kind: QType::Year(y), mint: m.clone() }, None);
        }
    }



}

fn main() {

    let mut collection = generate_collection();

    // // Add a quarter to the collection 
    // let action = add_quarter(Quarter{qtype: QType::Year(2023), mint: Mint::D, condition: Condition::Good}, &mut collection);

    // for q in &collection {
    //     println!("{:?}", q);
    // }

    // println!("{}", &collection.len());

}