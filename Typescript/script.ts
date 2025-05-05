// ## Typescript data types

import { Console } from "console";

// Typescript supports the following data types:

// - **Boolean**: Represents a boolean value (`true` or `false`).
// - **Number**: Represents a number value (integer or floating point).
// - **String**: Represents a string value.
// - **Array**: Represents an array of values.
// - **Tuple**: Represents an array with a fixed number of elements.
// - **Enum**: Represents a set of named constants.
// - **Any**: Represents any type.
// - **Void**: Represents the absence of a type.
// - **Null**: Represents a null value.
// - **Undefined**: Represents an undefined value.
// - **Never**: Represents a value that never occurs.

//Boolean in typescript

let isDone: boolean = false;

isDone = true; // OK

//Number in typescript

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744; // ES6
let notANumber: number = NaN; // Not a number
let infinity: number = Infinity; // Infinity
let num: number = 23;

//String in typescript

let color: string = "blue";
let fullName: string = `John Doe`;
let age: number = 30;
let greeting: string = `Hello, my name is ${fullName} and I am ${age} years old.`;

//error: Type 'number' is not assignable to type 'string'
//let str: string = 123; // Error: Type 'number' is not assignable to type 'string'

//Array in typescript

let list: number[] = [1, 2, 3, 4, 5];
for (let i = 0; i < list.length; i++) {
  console.log(list[i]); // Output: 1 2 3 4 5
}

let list2: Array<number> = [1, 2, 3, 4, 5]; // Generic array type

for (let i = 0; i < list2.length; i++) {
  console.log(list2[i]); // Output: 1 2 3 4 5
}

let list3: Array<string> = ["apple", "banana", "cherry"]; // Generic array type
for (let i = 0; i < list3.length; i++) {
  console.log(list3[i]); // Output: apple banana cherry
}

//Tuple in typescript

let x: [string, number] = ["hello", 10]; // Tuple type
x[0] = "world"; // OK

x[1] = 20; // OK

//x[2] = "error"; // Error: Type 'string' is not assignable to type 'number'

//enum in typescript

enum Color {
  blue = 0,
  green = 1,
  red = 2,
  yellow = 3,
  orange = 4,
  purple = 5,
}

console.log(Color.blue); // Output: 0
//error: Type 'number' is not assignable to type 'Color'
//let c: Color = 10; // Error: Type 'number' is not assignable to type 'Color'

//any in typescript

let a = 30; // Type 'number'

let b;

b = 20; // Type 'any'
b = "hello"; // Type 'any'
b = true; // Type 'any'''

//void in typescript
let voidFunction = (): void => {
  console.log("This function does not return anything.");
};

voidFunction(); // Output: This function does not return anything.

function voidFunction2(): void {
  console.log("This function does not return anything.");
  return; // Optional return statement
}

function voidFunction3(): number | void {
  console.log("This function may return a number or nothing.");
  return 42; // Returns a number
}

//null and undefined in typescript

let n: null = null; // Type 'null'
let u: undefined = undefined; // Type 'undefined'

// let n2: null = undefined; // Error: Type 'undefined' is not assignable to type 'null'

// let u2: undefined = null; // Error: Type 'null' is not assignable to type 'undefined'

//never in typescript

let errorFunction = (): never => {
  throw new Error("This function always throws an error.");
};

errorFunction(); // Throws an error

// functions in typescript

function add(x: number, y: number): number {
  return x + y;
}

function printSomeone(name: string): void {
  console.log(`Hello, ${name}!`);
}

function returnNothing(): never {
  throw new Error("This function never returns a value.");
}

function returnFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

//classes in typescript

class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

//make an instance of the class
let john = new Person("John", "Doe");
console.log(john.getFullName()); // Output: John Doe

let jane = new Person("Jane", "Smith");
console.log(jane.getFullName()); // Output: Jane Smith
