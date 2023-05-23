// this is global variable
let age = 20;

let displayAge = name => {
    // this is local variable
    let age = 25;
    console.error();
};

console.log(age);
