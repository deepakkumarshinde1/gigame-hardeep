// DOM --> Document Object Model
// Logical representation of HTML code
// DOM tree
function getElement(selector) {
  const element = document.querySelector(selector);
  try {
    if (element === null) {
      throw new SyntaxError(`'${selector}' is not found`);
    }
    return element;
  } catch (error) {
    console.error(error);
    return;
  }
}

let btn = getElement("button"); // single
let h1 = getElement("h1");
let list = getElement(".list");
let count = 0;
// document.querySelectorAll();// []

// events -> user action
btn.addEventListener("click", async function () {
  try {
    let url = `https://jsonplaceholder.typicode.com/users`;
    let response = await fetch(url);
    let data = await response.json();

    let userLi = data
      .map(function (user) {
        let li = `<li>${user.name} <button>Delete</button></li>`;
        return li;
      })
      .join("");

    list.innerHTML = userLi;
  } catch (error) {
    alert(`${error.message} , contact to admin or try after some time`);
  }
});

// var, scop, clo, Event loop , Prototype , Async A sync , dom and api call
// functional programming
function fun(){
  var text= "hi";
} 

console.log(text)