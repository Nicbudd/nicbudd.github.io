mod interpreter;

use wasm_bindgen::prelude::*;

#[wasm_bindgen(start)]
pub fn main() -> Result<(), JsValue> {
    // Use `web_sys`'s global `window` function to get a handle on the global
    // window object.
    let window = web_sys::window().expect("no global `window` exists");
    let document = window.document().expect("should have a document on window");
    let body = document.body().expect("document should have a body");
    let main_body = document.get_element_by_id("mainBody").expect("mainBody not found");
    let i16b64_input = document.get_element_by_id("i16b64_input").expect("i16b64_input not found");


    Ok(())
}

#[wasm_bindgen]
pub fn wasm_main(code: &str, debug: bool, stdin: &str) -> String {
    interpreter::wasm_main(code, debug, stdin)
}
