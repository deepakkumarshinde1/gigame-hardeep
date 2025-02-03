// 8. Promises*
// 9. Async Functions*
// 10. Symbols
// definition: Symbols are unique and immutable data types.
// They are created using the Symbol() function.
// example
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
// console.log(symbol1 === symbol2); // false
// console.log(symbol1.toString());
// real world use case
const RED = Symbol("RED");
const BLUE = Symbol("BLUE");
const GREEN = Symbol("GREEN");
function getColor(color) {
  switch (color) {
    case RED:
      return "STOP";
    case BLUE:
      return "GO";
    case GREEN:
      return "READY";
  }
}
console.log(RED); //
getColor(RED); // STOP
// 11. Generators
// definition: Generators are functions that can be paused and resumed.
//  They are created using a function* declaration.
// example
function* createId(max) {
  let i = 0;
  while (i < max) {
    let id = Math.floor(Math.random() * 1000);
    i++;
    yield id;
  }
}
let ids = createId(2);
// console.log(ids.next());
// console.log(ids.next());
// console.log(ids.next());
// console.log(ids.next());
// console.clear();
// 12. Iterators
// definition: Iterators are objects that implement the next() method.
// They are used to loop over data structures.
// example
let array = [1, 2, 3, 4, 5, 6];
let iterator = array[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// 13. Maps
// definition: Maps are collections of key-value pairs.
// They are created using the new Map() constructor.
// example
let object = {
  Name: "Deepak",
  Age: 25,
};
// name , age , address
// address , age , name
let map = new Map(Object.entries(object));
// console.log(map.get("Name"));
// console.log(map.has("Age"));
// console.log(map.size);
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries().next());

// 14. Sets
// definition: Sets are collections of unique values.
// They are created using the new Set() constructor.
// example
let set = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
// console.log(set.size); // 5
// console.log(set.has(5)); // true
// console.log(set.delete(5)); // true
// console.log(set.size); // 4
// console.log(set.clear()); // undefined
// console.log(set.size); // 0

// 17. Proxies
// 18. Modules
