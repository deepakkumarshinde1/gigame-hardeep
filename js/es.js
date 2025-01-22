// es 6 features list
// 1. let and const
// example
// let x = 10;
// const y = 20;
// x = 30; // valid
// y = 40; // invalid

// 2. Arrow functions
// example
// function add(a, b) {
//   return a + b;
// }
// const add = (a, b) => a + b;
// const add = (a, b) => {
//   return a + b;
// };

// 3. Default parameters
// example
// function add(a, b=0) {
//   return a + b;// 10
// }
// add(10); // 10
// add(10, 20); // 30

// 4. Template literals
// example
// const name = 'John';
// const age = 30;
// const sentence = `My name is ${name} and I am ${age} years old.`;
// console.log(sentence); // My name is John and I am 30 years old.

// 5. Destructuring
// definition: Destructuring assignment allows you to assign the properties of an array or object to variables using syntax that looks similar to array or object literals.
let array = [1, 2, 3, 4, 5, 6];
// let a = array[0];
// let b = array[1];
// let c = array[2];
// let newArray = array.slice(3);
let [a, b, c, ...newArray] = array;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(newArray); // [4,5,6]

let student = {
  name: "John",
  age: 30,
  city: "New York",
};
// let name = student.name;
// let age = student.age;
// let city = student.city;
//let {name, age, city} = student;
// let myName = student.name;
let { name: myName, age, city } = student;
console.log(myName); // John
console.log(age); // 30
console.log(city); // New York

// 6. Rest and Spread
// Rest: The rest parameter allows you to represent an indefinite number of arguments as an array.
// example of rest
function sum(...numbers) {
  console.log(numbers); // [1,2,3,4,5,6,7,8,9,10]
  let result = numbers.reduce((a, b) => (result = a + b), 0);
  console.log(result); // 55
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Spread: The spread operator allows you to expand an array or object into places where multiple elements or key-value pairs are expected.
// example of spread
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let newArray1 = [...array1, ...array2];
console.log(newArray1); // [1,2,3,4,5,6]

let student1 = {
  name: "John",
  age: 30,
};
let student2 = {
  city: "New York",
};
let newStudent = { ...student1, ...student2 };
console.log(newStudent); // {name: "John", age: 30, city: "New York"}

// 7. Classes
class Parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  print() {
    console.log("Parent");
  }
  printDetails() {
    console.log(this.name, this.age);
  }
}
// Inheritance
class Human extends Parent {
  constructor(name, age) {
    super(name, age);
  }

  printDetails() {
    Parent.call.printDetails();
    console.log(this.name, this.age);
  }

  static printSomething() {
    console.log("Hello");
  }
}
let human = new Human("deepakkumar", 25);
human.printDetails(); // Deepakkumar 25
Date.now(); // static method
Human.printSomething(); // Hello
Human.print(); // Parent

// 8. Promises
// 9. Async Functions
// 10. Symbols
// 11. Generators
// 12. Iterators
// 13. Maps
// 14. Sets
// 17. Proxies
// 18. Modules
