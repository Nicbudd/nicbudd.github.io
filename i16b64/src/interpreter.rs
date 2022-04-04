// This language is a Work in Progress
use std::env;
use std::char;
use std::fs;
use std::io::{self, Read, Write};

const CONSTS: [u16; 10] = [
0x1c72,
0x14bc,
0xfc26,
0x7e37,
0xb53f,
0x4fda,
0x20fe,
0x445a,
0xb76a,
0x25e5];


pub fn interpret(code: &str, debug_flag: bool, safe: bool, stdin_wasm: &str) -> String {

    let mut debug_string = String::new();
    let mut stdout = String::new();

    let mut stdin_bytes = stdin_wasm.bytes();

    let mut stack: Vec<u16> = Vec::new();
    let mut flag = false;

    let mut skip_loop = false;
    let mut loop_stack = vec![];
    let mut loop_iterations = 0;
    let mut parenthesis = 0;

    let mut skip_comments = false;
    let mut end_of_loop = false;

    let code_chars: Vec<_> = code.chars().clone().collect(); //cause strings in UTF8 are weird.

    let mut i: isize = -1;

    while !end_of_loop {

        i += 1; // increment loop

        let c = match code_chars.get(i as usize) {
            Some(val) => *val,
            None => break,
        };

        if debug_flag && (c == '(' || c == ')' || !skip_loop) {
            debug_string += &format!("'{}'@{}, f={}, skip={}, loop_stack={:?}, stack={:?}\n", &c, &i, &flag,
                skip_loop || skip_comments, &loop_stack, &stack);
        }


        if skip_comments {
            if c == '\n' {skip_comments = false;}
            continue;

        } else if c.is_ascii_whitespace() || c.is_ascii_control() {
            continue;

        // loop handling
        } else if c == '(' {
            if !flag {skip_loop = true;} // skip loop if not flag

            if skip_loop {
                parenthesis += 1; // count amount of left parenthesis

            } else {
                loop_stack.push(i); // push current index to loop stack
            }

        } else if c == ')' {
            if skip_loop {
                parenthesis -= 1; // remove right parenthesis

                if parenthesis == 0 { // if out of the nest (amt. left parenthesis == amt. right parenthesis)
                    skip_loop = false; // stop skipping
                }

            // otherwise we're in the loop
            } else if safe && loop_iterations > 10000 { // safe mode infinite loop protection
                    panic!("Safe Mode Error: Too many loop repetitions.");

            // restart loop if flag, otherwise end loop
            } else if flag { // go back to beginning of loop
                loop_iterations += 1; // add to count of amt of loops done
                // loop back
                i = loop_stack.pop().expect("Interpreter Error: No items on loop stack") - 1;

            } else { // end loop
                // remove loop pointer from stack
                loop_stack.pop().expect("Interpreter Error: No items on loop stack");

            }
        }

        if !skip_loop {

            let c_int: isize = c as isize - 48; // convert char to int (for integer instructions)
            if c_int < 10 && c_int >= 0 {
                let c_int: usize = c_int as usize;
                stack.push(CONSTS[c_int]);

            } else {
                match c {
                    'A' => {
                        let x = stack.pop().expect("No items on stack to add.");
                        let y = stack.pop().expect("Not enough items on stack to add.");
                        stack.push(x & y);
                    },

                    'C' => {
                        let top_val = stack.pop().expect("No items on stack to print.");
                        let x: char = (top_val & 0xff) as u8 as char; // masking to one byte
                        let y: char = (top_val >> 8)   as u8 as char; // sifting and taking top 8 bits

                        stdout.push(y);
                        stdout.push(x);
                    },

                    'D' => {
                        let x = stack.pop().expect("No items on stack to duplicate.");
                        stack.push(x);
                        stack.push(x);
                    },

                    'E' => {
                        end_of_loop = true;
                    }

                    'F' => {
                        let x = stack.pop().expect("No items on stack to find.");
                        let l = stack.len();
                        let index = l - (x as usize) - 1;
                        match stack.get(index) {
                            Some(_) => {
                                let y = stack.remove(index);
                                stack.push(y);
                            },

                            None => {flag = true;}
                        }


                    },

                    'H' => {

                        let byte_x = stdin_bytes.next()
                            .expect("(Interpreter Error) Could not find next byte in STDIN.");
                        let byte_y = stdin_bytes.next()
                            .expect("(Interpreter Error) Could not find next byte in STDIN.");
                        let byte_z = stdin_bytes.next()
                            .expect("(Interpreter Error) Could not find next byte in STDIN.");


                        stack.push(byte_x as u16);
                        stack.push(((byte_y as u16) << 8) + (byte_z as u16));
                    },

                    'I' => {
                        let byte_x = stdin_bytes.next()
                            .expect("(Interpreter Error) Could not find next byte in STDIN.");
                        let byte_y = stdin_bytes.next()
                            .expect("(Interpreter Error) Could not find next byte in STDIN.");

                        stack.push(((byte_x as u16) << 8) + (byte_y as u16));
                    },

                    'J' => {
                        let byte = stdin_bytes.next()
                            .expect("(Interpreter Error) Could not find next byte in STDIN.");
                        stack.push(byte as u16)
                    },

                    'L' => {
                        let x = stack.pop().expect("No items on stack to shift.") as u32;
                        let y = stack.pop().expect("Not enough items on stack to shift.");
                        stack.push(y.rotate_left(x));
                    },

                    'M' => {
                        let x = stack.pop().expect("No items on stack to take modulus of.");
                        let y = stack.pop().expect("Not enough items on stack to perform modulo operation.");
                        stack.push(y % x);
                    },

                    'N' => {
                        let x = stack.pop().expect("No items on stack to preform NOT operation on.");
                        stack.push(!x);
                    },

                    'O' => {
                        let x = stack.pop().expect("No items on stack to take modulus of.");
                        let y = stack.pop().expect("Not enough items on stack to perform modulo operation.");
                        stack.push(x | y);
                    },

                    'P' => {
                        let x = stack.pop().expect("No items on stack to find.");
                        let y = stack.pop().expect("No items on stack to find.");

                        let l = stack.len();
                        let index = l - (x as usize);
                        match stack.get(index) {
                            Some(_) => {
                                stack.insert(index, y);
                            },

                            None => {flag = true;}
                        }
                    },

                    'Q' => {
                        stack.push(rand::random::<u16>());
                    },

                    'R' => {
                        let x = stack.pop().expect("No items on stack to shift.") as u32;
                        let y = stack.pop().expect("Not enough items on stack to shift.");
                        stack.push(y.rotate_right(x));
                    },

                    'S' => {
                        let x = stack.pop().expect("No items on stack to take modulus of.");
                        let y = stack.pop().expect("Not enough items on stack to perform modulo operation.");
                        stack.push(x);
                        stack.push(y);
                    },

                    'U' => {
                        let x = char::from_u32(
                            stack.pop().expect("No items on stack to print.")
                            as u32
                        ).expect("Could not convert stack number to char");

                        stdout.push(x);

                    },

                    'V' => {
                        let x = stack.pop().expect("No items on stack to print.");
                        let y = stack.pop().expect("No items on stack to print.");
                        let z = char::from_u32((x as u32) + ((y as u32) << 16))
                            .expect("Could not convert stack number to char");

                        stdout.push(z);

                    },

                    'X' => {
                        let x = stack.pop().expect("No items on stack to XOR.");
                        let y = stack.pop().expect("Not enough items on stack to XOR.");
                        stack.push(x ^ y);
                    },

                    'a' => {
                        let x = stack.pop().expect("No items on stack to add.");
                        let y = stack.pop().expect("Not enough items on stack to add.");
                        let sum = x.overflowing_add(y);
                        flag = sum.1;
                        let sum = sum.0;

                        stack.push(sum);
                    },

                    'b' => {
                        let x = stack.pop().expect("No items on stack to use as flag.");
                        flag = (x % 2) == 1; // will return true if LSB is 1, otherwise will return false
                        stack.push(x);
                    },

                    'c' => {
                        let x = stack.pop().expect("No items on stack to compare.");
                        let y = stack.pop().expect("Not enough items on stack to compare.");
                        flag = x < y;
                        stack.push(y);
                        stack.push(x);
                    },

                    'd' => {
                        let _x = stack.pop().expect("No items on stack to delete.");
                    },

                    'e' => {
                        let x = stack.pop().expect("No items on stack to compare.");
                        let y = stack.pop().expect("Not enough items on stack to compare.");
                        flag = x == y;
                        stack.push(y);
                        stack.push(x);
                    },

                    'f' => {
                        let x = stack.pop().expect("No items on stack to duplicate.");
                        let l = stack.len();
                        let index = l - ((x as usize) % 16) - 1;

                        match stack.get(index) {
                            Some(_) => {
                                let y = stack.remove(index);
                                stack.push(y);
                            },
                            None => {
                                flag = true;
                            }
                        }
                    },

                    'g' => {
                        let x = stack.pop().expect("No items on stack to compare.");
                        let y = stack.pop().expect("Not enough items on stack to compare.");
                        flag = x > y;
                        stack.push(y);
                        stack.push(x);
                    },

                    'i' => {
                        flag = !flag;
                    },

                    'l' => {
                        let x = stack.pop().expect("No items on stack to shift.");
                        stack.push(x.rotate_left(1));
                    },

                    'q' => {
                        flag = rand::random();
                    },

                    'r' => {
                        let x = stack.pop().expect("No items on stack to shift.");
                        stack.push(x.rotate_right(1));
                    },

                    'p' => {
                        let x = stack.pop().expect("No items on stack to find.");
                        let y = stack.pop().expect("No items on stack to find.");

                        let l = stack.len();
                        let index = l - ((x as usize) % 16);
                        match stack.get(index) {
                            Some(_) => {
                                stack.insert(index, y);
                            },

                            None => {flag = true;}
                        }
                    },

                    'y' => {
                        let x = stack.remove(0);
                        stack.push(x);
                    },

                    'z' => {
                        let x = stack.pop().expect("No items on stack to move.");
                        stack.insert(0, x);
                    },

                    '#' => {
                        skip_comments = true
                    }

                    '(' | ')' => {}

                    _ => {panic!("Unrecognized character '{}'", c)},

                }
            }
        }

        if debug_flag {};

    }

    if (debug_flag) {
        debug_string + "\nResult: \n"+ &stdout
    } else {
        stdout
    }
}



pub fn trim_code(code: String) -> String {

    let mut code_chars: Vec<char> = vec![]; //cause strings in UTF8 are weird.

    let mut skip_comments = false;
    // remove unnessecary characters
    for c in code.chars() {
        if skip_comments {
            if c == '\n' {skip_comments = false}
            continue;

        } else if c.is_ascii_whitespace() || c.is_ascii_control() {
            continue;

        } else if c == '#' {
            skip_comments = true;
            continue;

        } else {
            code_chars.push(c)
        }
    }

    code_chars.iter().collect::<String>()
}



pub fn wasm_main(code: &str, debug: bool, stdin: &str) -> String {
    let trimmed_code = &trim_code(code.to_string());
    let mut return_str = String::new();
    if (debug) {
        return_str += "Loaded Code: ";
        return_str += trimmed_code;
        return_str += "\n\nExectution Dump:\n";

    }

    return_str += &interpret(trimmed_code, debug, true, stdin);
    return_str
}
