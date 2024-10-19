// variables can be written with var
var age: number = 45;
let str: string = "Hello world";
const num: number = 100;
let third: number = 0o455; //octal
let fourth: number = 0b1001; //binary

//Number methods:
/*
toExponential() -> returns the exponential notation in string format
toFixed()       -> returns the fixed point notation in string format
toLocalString() -> convert the number into a local specific representation of the number
toPrecision()   -> return the string representation in exponential or fixed point precicion
toString()      => return string representation of the number
valueOf()       -> returns the primitive value of the number
*/

let fruits: string[] = ["banana", "apple"];
let scndfruits: Array<string> = ["banana", "apple"];

function sum(x: number, y: number): number {
	return x + y;
}

class employee {
	empId: number;
	empName: string;
	constructor(empid: number, empname: string) {
		this.empId = empid;
		this.empName = empname;
	}
}
//To execute the typescript and convert to js you execute:
// tsc type.ts
// then
// node type.js
console.log(sum(9, 5));
