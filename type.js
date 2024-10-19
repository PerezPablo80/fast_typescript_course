// variables can be written with var
var age = 45;
var str = "Hello world";
var num = 100;
var third = 301; //octal
var fourth = 9; //binary
//Number methods:
/*
toExponential() -> returns the exponential notation in string format
toFixed()       -> returns the fixed point notation in string format
toLocalString() -> convert the number into a local specific representation of the number
toPrecision()   -> return the string representation in exponential or fixed point precicion
toString()      => return string representation of the number
valueOf()       -> returns the primitive value of the number
*/
var fruits = ["banana", "apple"];
var scndfruits = ["banana", "apple"];
function sum(x, y) {
    return x + y;
}
var employee = /** @class */ (function () {
    function employee(empid, empname) {
        this.empId = empid;
        this.empName = empname;
    }
    return employee;
}());
//To execute the typescript and convert to js you execute:
// tsc type.ts
// then
// node type.js
console.log(sum(9, 5));
