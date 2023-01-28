use crate::calc::next_value;

use yew::prelude::*;

pub struct App {
    results: String,
    contains_list: String,
    fibonacci: bool,
    prime: bool,
    palindrome: bool,
}

enum Msg {
    Fibonacci(bool),
    Prime(bool),
    Palindrome(bool),
    ContainsList(String),
    Run
}

impl App {

}

impl Component for App {
    type Message = Msg;
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        Self {
            results: String::new(),
            contains_list: String::from("420 69"),
            fibonacci: true,
            prime: false,
            palindrome: false,
        }
    }

    fn update(&mut self, _ctx: &Context<Self>, msg: Self::Message) -> bool {
        match msg {
            Msg::Fibonacci(b) => {
                self.fibonacci = b;
                true
            },
            Msg::Prime(b) => {
                self.prime = b;
                true
            },
            Msg::Palindrome(b) => {
                self.palindrome = b;
                true
            },
            Msg::ContainsList(s) => {
                self.contains_list = s;
                true
            },
            Msg::Run => {
                next_value()
            }
        }
    }
}

