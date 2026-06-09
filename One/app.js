// ==========================================
// DAY 1 - JavaScript Fundamentals for DSA
// ==========================================

// ------------------------------------------
// Variables and Data Types
// ------------------------------------------

let a = 10;
let b = "20";

// typeof is used to check data type

console.log(typeof a); // number
console.log(typeof b); // string

// Common Data Types

// Number
let num = 100;

// String
let name = "Vaibhav";

// Boolean
let isLoggedIn = true;

// Undefined
let x;

// Null
let y = null;

// ------------------------------------------
// String Concatenation
// ------------------------------------------

// Whenever we add two strings, it is called
// concatenation, not addition.

console.log("10" + "1"); // 101

console.log("Sum of 10 and 20: " + a + b);
// Output: Sum of 10 and 20: 1020

// If we want actual addition:

console.log(a + Number(b));
// Output: 30

// ------------------------------------------
// Type Coercion
// ------------------------------------------

// JavaScript automatically converts one
// data type into another when required.

console.log("1" - 1);
// Output: 0

// String "1" becomes Number 1

console.log("5" * 2);
// Output: 10

console.log("10" / 2);
// Output: 5

console.log("5" - 2);
// Output: 3

console.log("5" + 2);
// Output: "52"

// Note:
// + can perform both addition and concatenation.
// *, /, - only perform mathematical operations.

// ------------------------------------------
// Type Casting
// ------------------------------------------

// Converting one data type into another.

let age = Number(prompt("Enter your age"));

console.log(typeof age);
// Output: number

// Note:
// prompt() always returns a string.

// ------------------------------------------
// Swapping Two Variables
// ------------------------------------------

// Method 1: Using Extra Variable

let num1 = 10;
let num2 = 20;
let temp;

temp = num1;
num1 = num2;
num2 = temp;

console.log(num1, num2);
// Output: 20 10

// Method 2: Without Extra Variable

let p = 10;
let q = 20;

p = p + q;
q = p - q;
p = p - q;

console.log(p, q);
// Output: 20 10

// Method 3: Destructuring (Modern JavaScript)

let m = 10;
let n = 20;

[m, n] = [n, m];

console.log(m, n);
// Output: 20 10

// ------------------------------------------
// Arithmetic Operators
// ------------------------------------------

// + Addition
// - Subtraction
// * Multiplication
// / Division
// % Modulus (Remainder)

console.log(10 + 5); // 15
console.log(10 - 5); // 5
console.log(10 * 5); // 50
console.log(10 / 5); // 2
console.log(10 % 3); // 1

// Modulus gives remainder.

// Last digit of a number

let number = 4687;

console.log(number % 10);
// Output: 7

// Remove last digit

console.log(Math.floor(number / 10));
// Output: 468

// ------------------------------------------
// Relational (Comparison) Operators
// ------------------------------------------

// >  Greater Than
// <  Less Than
// >= Greater Than or Equal To
// <= Less Than or Equal To
// != Not Equal
// !== Strict Not Equal

console.log(10 <= 15);
// true

console.log(10 !== 11);
// true

// ------------------------------------------
// Assignment vs Equality
// ------------------------------------------

// = Assignment Operator

let value = 10;

// == Loose Equality

console.log(5 == "5");
// true

// === Strict Equality

console.log(5 === "5");
// false

// == checks only values
// === checks value + data type

// ------------------------------------------
// Logical Operators
// ------------------------------------------

// && AND
// || OR
// ! NOT

console.log(true && true);
// true

console.log(true && false);
// false

console.log(true || false);
// true

console.log(!true);
// false

// Short Circuiting

// AND (&&)
// If first condition is false,
// JavaScript stops checking further.

// OR (||)
// If first condition is true,
// JavaScript stops checking further.

// ------------------------------------------
// Unary Operators
// ------------------------------------------

// ++ Increment
// -- Decrement

let count = 5;

count++;

console.log(count);
// 6

count--;

console.log(count);
// 5

// ------------------------------------------
// Pre and Post Increment
// ------------------------------------------

let a1 = 5;

console.log(a1++);
// Output: 5

console.log(a1);
// Output: 6

let b1 = 5;

console.log(++b1);
// Output: 6

console.log(b1);
// Output: 6

// ------------------------------------------
// Boolean Increment Example
// ------------------------------------------

let flag = true;

flag++;

console.log(flag);
// Output: 2

// true becomes 1
// then 1 + 1 = 2

// ------------------------------------------
// Invalid Increment Example
// ------------------------------------------

// let a = 10++;
// Error

// Reason:
// ++ can only be used on variables,
// not directly on values.

let z = 10;

z++;

console.log(z);
// 11

// ------------------------------------------
// Math Functions
// ------------------------------------------

console.log(Math.floor(4.9));
// 4

console.log(Math.ceil(4.1));
// 5

console.log(Math.round(4.5));
// 5

console.log(Math.trunc(4.9));
// 4

console.log(Math.abs(-10));
// 10

console.log(Math.max(10, 20, 30));
// 30

console.log(Math.min(10, 20, 30));
// 10

console.log(Math.random());
// Random number between 0 and 1

// ------------------------------------------
// Truthy and Falsy Values
// ------------------------------------------

// Falsy Values

// false
// 0
// ""
// null
// undefined
// NaN

// Everything else is Truthy

if ("Hello") {
console.log("Truthy");
}

// ------------------------------------------
// let vs const vs var
// ------------------------------------------

// let -> value can change

let age1 = 20;
age1 = 25;

// const -> value cannot change

const PI = 3.14;

// var -> old way of declaring variables
// avoid using var in modern JavaScript

var city = "Delhi";

// ------------------------------------------
// Template Literals
// ------------------------------------------

let student = "Vaibhav";

console.log(`Hello ${student}`);

// Output:
// Hello Vaibhav

// ==========================================
// DAY 1 SUMMARY
// ==========================================

// 1. Variables
// 2. Data Types
// 3. String Concatenation
// 4. Type Coercion
// 5. Type Casting
// 6. Swapping
// 7. Arithmetic Operators
// 8. Relational Operators
// 9. Equality Operators
// 10. Logical Operators
// 11. Unary Operators
// 12. Math Functions
// 13. Truthy & Falsy Values
// 14. let, const, var
// 15. Template Literals



//Q

//Area of rectangle

// let a=5;
// let b=7;
// console.log(a*b);

//parameter 

//2(l*b)

//Heros formula 
