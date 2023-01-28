use itertools::Itertools;
use num::integer::Roots;
use num_bigint::BigUint;
use is_prime::*;

pub struct State {
    Fibon
}

// FIBONACCI
struct Fibonacci {
    curr: BigUint,
    next: BigUint
}
impl Iterator for Fibonacci {
    type Item = BigUint;

    fn next(&mut self) -> Option<Self::Item> {
        let current = self.curr.clone();

        self.curr = self.next.clone();
        self.next = &current + &self.next;

        Some(current)
    }
}
fn get_fibonacci() -> Fibonacci {
    Fibonacci { curr: BigUint::new(vec![0]), next: BigUint::new(vec![1]) }
}



pub fn next_value(fibonacci: bool, prime: bool, palindrome: bool, 
    contains_list: Vec<String>) -> String {

    if fibonacci {
        let iter = get_fibonacci()
    }

}