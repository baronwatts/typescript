//main primitive types
let id: number = 5;
let company: string = 'Baron Media';
let isPublished: boolean = true;
let x: any = 'Hello'; //can be reassign to anything
let ids: number[] = [1,2,3,4,5]; //array that only contains numbers
let arr: any[] = [1,true,'Hello'];

//Tuple
let person: [number, string, boolean] = [1, 'Baron', true];
//Tuple Array
let employee: [number, string][];

employee = [
    [1,'Baron'],
    [2,'John'],
    [1,'Jill'],
]

//Union. Set as number or string
let pid: string | number;
pid = '22';

//Enum. set of name constants numeric or string
enum Direction1{
    Up,
    Down,
    Left,
    Right
}

console.log(Direction1.Up);//0 by default

enum Direction2{
    Up = 1,
    Down,
    Left,
    Right
}

console.log(Direction2.Up);//starts at 1 instead of 0

enum Direction3{
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction3.Left);//Left

//Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}


//Type Assertion. Tell the compiler to treat the entity as a different type
let cid: any = 1;
//let customerId = <number>cid;
let customerId = cid as number;

//Tells the funtion that the return value should be a number ():number{}
function addNum(x: number, y: number): number{
    return x + y;
}

// Void. A function that doesn't return anything. The function can be a string or number using pipe |
function log(message: string | number) : void{
    console.log(message);
}

//Interface. Can't use interface with primitives or unions. ? means it's optional. readonly means you can't reassign it to something else
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {  
    id: 1,
    name: 'John'
}


//types
type Point = number | string;
const p1: Point = 1;


//interface with function
interface MathFunc{
    (x: number, y: number):number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;



//INterface used in class
interface PersonInterface {
    id: number,
    name: string,
    register(): string
}


//Classes. Private = only accessible within the class. Can't reassign the id outside of the class. Protected = only accessible within class or extended classes
class Person implements PersonInterface{
    id: number;
    name: string;

    //RUNS EVERYTIME CLASS IS INSTANTIATED  
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }

    //method
    register(){
        return `${this.name} is now registered`
    }

}

const baron = new Person(1, 'Baron Watts');
const mike = new Person(2, 'Mike Jordan');


//Subclasses
class Employee extends Person{
    position: string;

    constructor(id: number, name: string, position: string){
        super(id,name)//initializes the parent constructor Person
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn','Developer');
console.log(emp.register());


//Generics. Used to buld reusable components. T is like a placeholder instead of using any.
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(['baron','John','Jill']);

strArray.push('Kim');