// print console output
//console.log('welcome to javascript');

// pop up a alert box
//alert('welcome');

// get user input
//const name = prompt('Enter your name');
//const age = prompt('Enter your age');

// string concatenate with variables
//console.log('welcome ' + name + ' you are ' + age + ' years old');
//console.log(`welcome ${name} your age is ${age}`);

let a, b, c;
a = b = c = 20;

const myname = "sanchitha udana wijesundara";
console.log(myname + a + b + c);

console.log(myname[0]); // print string elements
console.log(myname.substring(0, 4));
console.log(myname.split(" "));
console.log(myname.lastIndexOf("a"));
console.log(myname.charAt(3));
console.log(myname.endsWith("dara"));
console.log(myname.replace("sanchitha", "Sanchitha"));

let details = {
  name: "sanchitha",
  age: 20,
  languages: ["java", "javascript", "python", "c", "html"],

  seField: {
    ios: "swift",
    web: "react",
  },
};

console.log(details.seField.ios);

details.school = "vns";
details.department = "ict";
console.log(details);

// functions creating

function displayName() {
  const name = prompt("Enter your Name ");
  console.log(name);
}

// function calling
//displayName();

// arrorw functions

let arrfunc = (name, age) => {
  console.log("this is arrow function");
  console.log(`hi ${name} you are ${age} years old`);
};

arrfunc("udana", 20);

// if arrow function has only one parameter,
// we can use this method to write arrow function

let newFun = (name) => {
  console.log(`how are you ${name}`);
};

newFun("sanchitha");

// if arrow function have only one parameter and one statement
// we can write

let newFun2 = (name) => console.log(name);

// with only return
let newFun3 = (name) => `your name is ${name}`;

newFun2("amal");

console.log(newFun3("kamal"));

console.error("js error");
console.warn("js warning");
console.log(details);

// create an object
var student1 = new Object();
var student2 = {};
var student3 = {
  name: "sanchitha",
  age: 21,
  dep: "ict",
};

// function property in an a object
student2.addingNum = function () {
  console.log("hello this is function in an object");
};

student2.addingNum();

