import { useState } from "react";
import Input from "./components/Input";

function App() {
  let [inputs, setInput] = useState([
    {
      filedName: "username",
      value: "",
      type: "text",
      label: "User Name",
    },
    {
      filedName: "password",
      value: "",
      type: "password",
      label: "Password",
    },
    {
      filedName: "email",
      value: "",
      type: "email",
      label: "Email",
    },
    {
      filedName: "address",
      value: "",
      type: "address",
      label: "User Permanent Address",
    },
    {
      filedName: "gender",
      value: [
        {
          filed: "male",
          value: "Male",
          check: true,
        },
        {
          filed: "female",
          value: "Female",
          check: false,
        },
        {
          filed: "other",
          value: "Other",
          check: false,
        },
      ],
      type: "radio",
      label: "Gender",
    },
    {
      filedName: "citizenship",
      value: [
        {
          filed: "indian",
          value: "Indian",
          check: true,
        },
        {
          filed: "US",
          value: "us",
          check: false,
        },
      ],
      type: "radio",
      label: "Citizenship",
    },
  ]);

  let handleInput = (event, index, radioIndex = -1, radioValue) => {
    if (radioIndex === -1) {
      let { value } = event.target;
      let _inputs = [...inputs];
      _inputs[index].value = value;
      setInput(_inputs);
    } else {
      let _inputs = [...inputs];
      let _tempRadioList = _inputs[index].value.map((radioList, _index) => {
        if (_index === radioIndex) {
          return { ...radioList, check: true };
        } else {
          return { ...radioList, check: false };
        }
      });
      _inputs[index].value = [..._tempRadioList];
      setInput(_inputs);
    }
  };
  return (
    <>
      <section className="container-fluid">
        <section className="row">
          <section className="col-4">
            {inputs.map((input, index) => (
              <Input
                key={index}
                index={index}
                {...input}
                handleInput={handleInput}
              />
            ))}
          </section>
        </section>
      </section>
    </>
  );
}

export default App;
