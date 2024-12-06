// function fun(){

// }

// let fun1 = ()=>{

// }

// fun3(()=>{

// })

// (()=>{

// })()

// pure function

function add(a, b) {
  return a + b;
}
add(10, 20);

// immutability
let obj = { name: "deepak" };

let obj2 = { ...obj }; // spread operator
obj2.name = "kumar";
console.log(obj);
console.log(obj2);

// hof
function fun5(callback) {
  callback();
}

fun5(() => {}); // function written in a other function call is called as callback function;
// and here fun5 is HOF i.e a function has  a definition and a argument in a function call

function add(a, b) {
  return a + b;
}

function multi(a, b) {
  return a * b;
}

function composition(fun1, fun2, a, b) {
  return fun1(fun2(a, b), b);
}

let result = composition(add, add, 10, 20);
console.log(result);

function sub(a) {
  return function (b) {
    return function (c) {
      return a - b - c;
    };
  };
}
// let sub = (a) => (b) => (c) => a - b - c;
sub(10)(20)(30);
console.clear();
// recursion function
// 10 + 9 + 8 +...+0
function loop(num, value = 0) {
  if (num <= 0) {
    return value;
  } else {
    value += num;
    num -= 1;
    return loop(num, value);
  }
}

let result1 = loop(10);
console.log(result1);

// 0 + 1 => 1
// 1 + 1 => 2
// 1 + 2 => 3
// 2 + 3 => 5
// 3 + 5 => 8
// 5 + 8 => 13
// 8 + 13 => 21
