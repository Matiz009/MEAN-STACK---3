function applyJS() {
  let p = document.getElementById("p1");
  console.log(p);
  p.innerHTML = "Hello World!";
  p.style.fontSize = "30px";
  p.style.color = "red";
  p.style.fontFamily = "Arial, sans-serif";

  document.getElementById("img1").src =
    "https://media.istockphoto.com/id/2164899383/photo/crassula-ovata-gollum-succulent-plant-top-view.jpg?s=1024x1024&w=is&k=20&c=-Bttd-O-TuCItQADch_WfaDXInTyYWvPF6pxOCYpzkQ=";
}

let button = document.getElementById("btn");
button.addEventListener("click", applyJS);

function sortList() {
  const list = document.getElementById("myList");
  const items = Array.from(list.getElementsByTagName("li"));

  // Create an array of text contents and sort it
  const itemArray = items.map((item) => item.textContent).sort();

  // Update the <li> elements with the sorted content
  items.forEach((item, index) => {
    item.textContent = itemArray[index];
  });
}

let sortButton = document.getElementById("btn-sort");
sortButton.addEventListener("click", sortList);

//window object

console.log(window.innerWidth); // Width of the window
console.log(window.innerHeight); // Height of the window
console.log(window.location.href); // Current URL
console.log(window.document.title); // Title of the document
console.log(window.navigator.userAgent); // User agent string
console.log(window.localStorage); // Local storage object
console.log(window.sessionStorage); // Session storage object
console.log(window.history); // Browser history object
console.log(window.screen); // Screen object
console.log(window.performance); // Performance object
console.log(window.console); // Console object

//document object

document.write("<h1>Hello World!</h1>"); // Write HTML to the document
document.getElementById("p1").inner;

//location object

console.log(location.href); // Current URL
console.log(location.protocol); // Protocol (http, https)
console.log(location.hostname); // Hostname (example.com)
console.log(location.pathname); // Pathname (/path/to/page)
console.log(location.search); // Query string (?id=1&name=John)
console.log(location.hash); // Fragment identifier (#section1)
console.log(location.port); // Port number (80, 443)

//JS data types

//primitive data types
// reference data types

let a = 10; // Number
let b = 20; // Number
let c = "Hello"; // String
let d = true; // Boolean

//operators

// Arithmetic Operators
let x = 10;
let y = 5;
let sum = x + y; // Addition
let difference = x - y; // Subtraction
let product = x * y; // Multiplication
let quotient = x / y; // Division
let remainder = x % y; // Modulus
let exponent = x ** y; // Exponentiation
let increment = ++x; // Increment

let decrement = --y; // Decrement

console.table({
  sum: sum,
  difference: difference,
  product: product,
  quotient: quotient,
  remainder: remainder,
  exponent: exponent,
  increment: increment,
  decrement: decrement,
});

// difference between == and ===
let num1 = 5; // Number

let str1 = "5"; // String

console.log(num1 == str1); // true (loose equality)

//because it converts str1 to a number before comparison it's called type coercion

console.log(num1 === str1); // false (strict equality)
//because it doesn't convert str1 to a number before comparison
// it checks both value and type

//comparison operators
let a1 = 10;
let b1 = 20;
let c1 = 30;

if (a1 < b1) {
  console.log("a is less than b");
} else if (a1 > b1) {
  console.log("a is greater than b");
} else {
  console.log("a is equal to b");
}

//ways to write functions

function add(a, b) {
  return a + b;
}

let add = function (a, b) {
  return a + b;
};

let add = (a, b) => {
  return a + b;
};

let add = (a, b) => a + b; // Implicit return

//iif statement

(function () {
  console.log("This is an IIFE (Immediately Invoked Function Expression)");
})();

//loops

for (let i = 0; i < 5; i++) {
  console.log(i); // Prints 0 to 4
}

