import { useState } from "react";

function App() {
  let [inputText, setInputText] = useState(""); // hook in react js
  let [finalText, setFinalText] = useState("");
  let incrementCount = () => {
    setFinalText(inputText);
    setInputText("");
  };

  let inputChange = (event) => {
    let { value, name } = event.target;
    setInputText(value);
  };
  return (
    <>
      <h1>Hello , {finalText}</h1>
      <input
        type="text"
        value={inputText}
        name="username"
        onChange={inputChange}
      />
      <button
        disabled={inputText.length < 3 ? true : false}
        className={inputText.length < 3 ? "btn btn-danger" : "btn btn-success"}
        onClick={incrementCount}
      >
        CLICK
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;

// # npm 7+, extra double-dash is needed:
// npm create vite@latest app-name -- --template react
// npx create-react-app app-name

// JSX => will one parent
// class => className
// for => htmlFor
// javascript logic => {}
// every element my be closed
