/*****************************************************************
                    DAY 2 - JAVASCRIPT CONDITIONS
*****************************************************************/

/*
=============================================================
1. IF STATEMENT
=============================================================

Used when we want to execute code only if a condition is true.

Syntax:

if(condition){
    // code
}

*/

console.log("----- IF STATEMENT -----");

let age1 = 20;

if (age1 >= 18) {
    console.log("Can Vote");
}

/*
Important:
✓ if can run alone.
✓ else cannot run alone.
*/


/*
=============================================================
2. IF ELSE
=============================================================

Used when there are only two possibilities.

Syntax:

if(condition){
    // true block
}
else{
    // false block
}

*/

console.log("\n----- IF ELSE -----");

let age2 = 16;

if (age2 >= 18) {
    console.log("Can Vote");
} else {
    console.log("Cannot Vote");
}


/*
=============================================================
3. ELSE IF LADDER
=============================================================

Used when there are multiple conditions.

*/

console.log("\n----- ELSE IF LADDER -----");

let marks = 85;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 80) {
    console.log("Grade B");
}
else if (marks >= 70) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}


/*
=============================================================
4. Number()
=============================================================

prompt() always returns a string.

Number() converts string to number.

Example:

let age = Number(prompt("Enter age"));

Input: "25"
Output: 25 (number)

*/


/*
=============================================================
5. NaN & isNaN()
=============================================================

NaN = Not a Number

isNaN(value)

Returns:
true  -> not a number
false -> valid number

*/

console.log("\n----- isNaN() -----");

console.log(isNaN("Hello")); // true
console.log(isNaN(100));     // false
console.log(isNaN("123"));   // false

let input = Number("abc");

if (isNaN(input)) {
    console.log("Invalid Number");
} else {
    console.log("Valid Number");
}


/*
=============================================================
6. LOGICAL OPERATORS
=============================================================
*/

/*
AND (&&)

All conditions must be true.
*/

console.log("\n----- AND OPERATOR -----");

let age3 = 25;

if (age3 >= 18 && age3 <= 60) {
    console.log("Eligible");
}


/*
OR (||)

At least one condition must be true.
*/

console.log("\n----- OR OPERATOR -----");

let age4 = 65;

if (age4 < 18 || age4 > 60) {
    console.log("Special Category");
}


/*
NOT (!)

Reverses result.
*/

console.log("\n----- NOT OPERATOR -----");

let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please Login");
}


/*
=============================================================
7. SHOP DISCOUNT QUESTION
=============================================================

0 - 5000      -> 0%
5001 - 7000   -> 5%
7001 - 9000   -> 10%
Above 9000    -> 20%

*/

console.log("\n----- SHOP DISCOUNT -----");

let amount1 = 8500;

if (amount1 <= 5000) {
    console.log("Final Amount =", amount1);
}
else if (amount1 <= 7000) {
    console.log(
        "Final Amount =",
        amount1 - Math.floor((5 * amount1) / 100)
    );
}
else if (amount1 <= 9000) {
    console.log(
        "Final Amount =",
        amount1 - Math.floor((10 * amount1) / 100)
    );
}
else {
    console.log(
        "Final Amount =",
        amount1 - Math.floor((20 * amount1) / 100)
    );
}


/*
=============================================================
8. Math.floor()
=============================================================

Removes decimal part.

*/

console.log("\n----- Math.floor() -----");

console.log(Math.floor(10.9));
console.log(Math.floor(99.99));
console.log(Math.floor(25.1));


/*
=============================================================
9. RANGE QUESTION
=============================================================

Common interview pattern.

*/

console.log("\n----- RANGE QUESTION -----");

let rating = 4;

if (rating === 5) {
    console.log("Excellent");
}
else if (rating >= 4) {
    console.log("Good");
}
else if (rating >= 3) {
    console.log("Average");
}
else {
    console.log("Poor");
}


/*
=============================================================
10. ELECTRICITY BILL QUESTION
=============================================================

0 - 100     -> ₹4/unit
101 - 200   -> ₹6/unit
201 - 400   -> ₹8/unit
Above 400   -> ₹13/unit

Example:
700 units

300 * 13 = 3900
200 * 8  = 1600
100 * 6  = 600
100 * 4  = 400

Total = 6500

*/

console.log("\n----- ELECTRICITY BILL -----");

let unit = 700;
let billAmount = 0;

if (unit > 400) {
    billAmount += (unit - 400) * 13;
    unit = 400;
}

if (unit > 200) {
    billAmount += (unit - 200) * 8;
    unit = 200;
}

if (unit > 100) {
    billAmount += (unit - 100) * 6;
    unit = 100;
}

billAmount += unit * 4;

console.log("Electricity Bill =", billAmount);


/*
=============================================================
11. INR DENOMINATION QUESTION
=============================================================

Given Amount = 3780

Find:
500 notes
200 notes
100 notes
50 notes
20 notes
10 notes

*/

console.log("\n----- INR DENOMINATION -----");

let money = 3780;

console.log("500 Notes =", Math.floor(money / 500));
money %= 500;

console.log("200 Notes =", Math.floor(money / 200));
money %= 200;

console.log("100 Notes =", Math.floor(money / 100));
money %= 100;

console.log("50 Notes =", Math.floor(money / 50));
money %= 50;

console.log("20 Notes =", Math.floor(money / 20));
money %= 20;

console.log("10 Notes =", Math.floor(money / 10));


/*
=============================================================
12. TERNARY OPERATOR
=============================================================

Short form of if else.

Syntax:

condition ? truePart : falsePart

*/

console.log("\n----- TERNARY OPERATOR -----");

let age5 = 22;

age5 >= 18
    ? console.log("Adult")
    : console.log("Minor");


/*
=============================================================
13. NESTED TERNARY OPERATOR
=============================================================

Ternary inside ternary.

*/

console.log("\n----- NESTED TERNARY -----");

let score = 85;

score >= 90
    ? console.log("Grade A")
    : score >= 80
        ? console.log("Grade B")
        : score >= 70
            ? console.log("Grade C")
            : console.log("Fail");


/*
=============================================================
14. SWITCH STATEMENT
=============================================================

Used when comparing one value with many cases.

Syntax:

switch(value){
    case value1:
        break;

    case value2:
        break;

    default:
}

*/

console.log("\n----- SWITCH -----");

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}


/*
=============================================================
15. MULTIPLE VALUES IN ONE CASE
=============================================================

Fall Through Concept

*/

console.log("\n----- MULTIPLE CASES -----");

let month = 1;

switch (month) {

    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;

    case 3:
    case 4:
    case 5:
        console.log("Summer");
        break;

    case 6:
    case 7:
    case 8:
        console.log("Monsoon");
        break;

    default:
        console.log("Unknown Season");
}


/*
=============================================================
16. FLOAT PRECISION ISSUE
=============================================================

JavaScript stores decimal numbers in binary.

0.1 + 0.2 is not exactly 0.3

*/

console.log("\n----- FLOAT PRECISION ISSUE -----");

let num = 0.1 + 0.2;

console.log(num);

switch (num) {

    case 0.3:
        console.log("Matched");
        break;

    default:
        console.log("Not Matched");
}

/*
Output:
0.30000000000000004
Not Matched
*/


/*
=============================================================
DAY 2 REVISION
=============================================================

✓ if

✓ if else

✓ else if ladder

✓ Number()

✓ NaN

✓ isNaN()

✓ AND (&&)

✓ OR (||)

✓ NOT (!)

✓ Shop Discount

✓ Math.floor()

✓ Range Questions

✓ Electricity Bill

✓ INR Denomination

✓ Ternary Operator

✓ Nested Ternary

✓ Switch

✓ Multiple Cases

✓ Float Precision Issue

=============================================================
END OF DAY 2
=============================================================
*/