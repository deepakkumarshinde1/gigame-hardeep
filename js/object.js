let object = {
  prop1: "value1",
  prop2: "value2",
  prop4: "value3",
};
console.log(object);

// get all keys
let keys = Object.keys(object);
console.log(keys);

// get all values
let values = Object.values(object);
console.log(values);

// get all key value pair
let entries = Object.entries(object);
console.log(entries);

// freeze object
let object1 = Object.freeze(object);
object1.prop1 = "value4";
console.log(object1);

// freeze an array
let array = [10, 20, 30, 40];
let array1 = Object.freeze(array);
array1[0] = 100;
console.log(array1);
