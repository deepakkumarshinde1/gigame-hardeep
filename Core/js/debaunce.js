let inputText = document.querySelector("#inputText");
let timeOutId = null;
let intervalId = true;

function debounce(delay, callback) {
  return function (event) {
    if (timeOutId) clearTimeout(timeOutId); // clearing the time out
    timeOutId = setTimeout(() => {
      callback(event);
    }, delay);
  };
}

inputText.addEventListener(
  "keyup",
  debounce(1000, (event) => {
    console.log(inputText.value);
  })
);

function throttling(limit, callback) {
  return function (event) {
    if (intervalId) {
      intervalId = false;
      setTimeout(() => {
        intervalId = true;
        callback(event);
      }, limit);
    }
  };
}
window.addEventListener(
  "scroll",
  throttling(2000, () => {
    console.log("scroll");
  })
);
