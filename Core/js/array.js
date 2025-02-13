const array = [10, 30, 20, 30, 40, 50, 30];

// array methods
// array.push(200);
// array.unshift(1000);
// array.splice(2, 0, 1000); // index , deleteCount , addValue

//array.length = 0;
// array.pop();
// array.shift();
// array.splice(3, 1);

// array.forEach((value, index) => {
//   console.log(value);
// });

// 1 result
let matchRecords1 = array.find((value, index) => {
  return value === 300;
}); // 1 value or undefined

let matchRecords = array.filter((value, index) => {
  return value === 300;
}); // [list] or []

// create square array
let newArray = array.map((value, index) => {
  return `<tr>
            <td>${index + 1}</td>
            <td>${value * value}</td>
        </tr>`;
});

newArray = newArray.join("");

console.log("Map Result ", newArray);

console.log(array);
console.log(array.length);

// js object
let product = {
  name: "MAC book",
  brand: "Appel",
  price: "62000 INR",
};

// get all keys
let keys = Object.keys(product);
console.log(keys);

let values = Object.values(product);
console.log(values);

let TwoArray = Object.entries(product);
console.log(TwoArray);

product["location"] = "India";
console.log(product);

delete product.brand;

console.log(product);

let products = [
  {
    name: "MAC book",
    brand: "Appel",
    price: "62000 INR",
  },
  {
    name: "MAC book",
    brand: "Appel",
    price: "62000 INR",
  },
  {
    name: "MAC book",
    brand: "Appel",
    price: "62000 INR",
  },
  {
    name: "MAC book",
    brand: "Appel",
    price: "62000 INR",
  },
  {
    name: "MAC book",
    brand: "Appel",
    price: "62000 INR",
  },
];

console.log(products);
