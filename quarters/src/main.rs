use serde::{Deserialize, Serialize};
use serde_json::Result;
use strum::IntoEnumIterator;
use strum_macros::EnumIter;
use std::fs;

#[derive(Debug, Eq, PartialEq, Copy, Clone, Serialize, Deserialize)]
enum QType {
    State(State),
    AmericaTheBeautiful(State),
    Year(u32),
    Women(Women),
}

#[derive(Debug, Eq, PartialEq, EnumIter, Copy, Clone, Serialize, Deserialize)]
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

#[derive(Debug, Eq, PartialEq, EnumIter, Copy, Clone, Serialize, Deserialize)]
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

#[derive(Debug, Eq, PartialEq, EnumIter, Copy, Clone, Serialize, Deserialize)]
enum Mint {
    P,
    D,
}

#[derive(Debug, Eq, PartialEq, EnumIter, Copy, Clone, Serialize, Deserialize)]
enum Condition {
    Good,
    Great,
    Bad,
    NonExistant,
}

#[derive(Debug, Copy, Clone, Serialize, Deserialize)]
struct Quarter {
    qtype: QType,
    mint: Mint,
    condition: Condition,
}

impl Quarter {
    fn betterthan(self, q: Quarter) -> bool {

        let firstrank: i32 = match self.condition {
            Condition::NonExistant => 0,
            Condition::Bad => 1,
            Condition::Good => 2,
            Condition::Great => 3,
        };

        let secondrank: i32 = match q.condition {
            Condition::NonExistant => 0,
            Condition::Bad => 1,
            Condition::Good => 2,
            Condition::Great => 3,
        };

        return (firstrank - secondrank) > 0;
    }

    fn isEquivalent(self, q: Quarter) -> bool {
        return q.qtype == self.qtype && q.mint == self.mint;
    }
}

enum QuarterAction {
    Add,
    Replace,
    Reject,
    Expansion,
}

// returns true if quarter was added to 
fn add_quarter(newQuarter: Quarter, collection: &mut Vec<Quarter>) -> QuarterAction {
    for q in collection {
        if newQuarter.isEquivalent(*q) {
            if q.condition == Condition::NonExistant {
                *q = newQuarter;
                return QuarterAction::Add;

            } else if newQuarter.betterthan(*q) {
                *q = newQuarter;
                return QuarterAction::Replace;

            }
        }
    }

    if newQuarter.condition == Condition::NonExistant {
        collection.push(newQuarter);
        return QuarterAction::Expansion;
    }

    return QuarterAction::Reject;
}

fn generate_collection() {

    let mut collection: Vec<Quarter> = vec![];

    // Generate complete collection
    for m in Mint::iter() {
        for st in State::iter() {

            collection.push(
                Quarter {
                    qtype: QType::State(st),
                    mint: m,
                    condition: Condition::NonExistant,
                });

            collection.push(
                Quarter {
                    qtype: QType::AmericaTheBeautiful(st),
                    mint: m,
                    condition: Condition::NonExistant,
                });
        }

        for w in Women::iter() {
            collection.push(
                Quarter {
                    qtype: QType::Women(w),
                    mint: m,
                    condition: Condition::NonExistant,
                }); 
        }

        for y in (1960..=2023) {
            collection.push(
                Quarter {
                    qtype: QType::Year(y),
                    mint: m,
                    condition: Condition::NonExistant,
                });
        }
    }

    let write_str = serde_json::to_string(&collection)
                                .expect("Can't construct JSON");

    let _ = fs::write("../quarters.json", write_str)
                                .expect("Can't write to file.");

}

fn main() {

    generate_collection();

    // // Add a quarter to the collection 
    // let action = add_quarter(Quarter{qtype: QType::Year(2023), mint: Mint::D, condition: Condition::Good}, &mut collection);

    // for q in &collection {
    //     println!("{:?}", q);
    // }

    // println!("{}", &collection.len());

}