"use strict";
//main primitive types
let id = 5;
let company = 'Baron Media';
let isPublished = true;
let x = 'Hello'; //can be reassign to anything
let ids = [1, 2, 3, 4, 5]; //array that only contains numbers
let arr = [1, true, 'Hello'];
//Tuple
let person = [1, 'Baron', true];
//Tuple Array
let employee;
employee = [
    [1, 'Baron'],
    [2, 'John'],
    [1, 'Jill'],
];
//Union. Set as number or string
let pid;
pid = '22';
//Enum. set of name constants numeric or string
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); //0 by default
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up); //starts at 1 instead of 0
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right";
})(Direction3 || (Direction3 = {}));
console.log(Direction3.Left); //Left
const user = {
    id: 1,
    name: 'John'
};
//Type Assertion. Tell the compiler to treat the entity as a different type
let cid = 1;
//let customerId = <number>cid;
let customerId = cid;
//Tells the funtion that the return value should be a number ():number{}
function addNum(x, y) {
    return x + y;
}
// Void. A function that doesn't return anything. The function can be a string or number using pipe |
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes. Private = only accessible within the class. Can't reassign the id outside of the class. Protected = only accessible within class or extended classes
class Person {
    //RUNS EVERYTIME CLASS IS INSTANTIATED  
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    //method
    register() {
        return `${this.name} is now registered`;
    }
}
const baron = new Person(1, 'Baron Watts');
const mike = new Person(2, 'Mike Jordan');
//Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); //initializes the parent constructor Person
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
console.log(emp.register());
//Generics. Used to buld reusable components. T is like a placeholder instead of using any.
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['baron', 'John', 'Jill']);
strArray.push('Kim');
