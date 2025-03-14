import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

// create  context
const BasicDetailsContext = createContext();

// create a hook => consume the context
export const useBasicDetailsContext = () => {
  return useContext(BasicDetailsContext);
};
// create  a provider
export function BasicDetailsContextProvider(props) {
  let [users, setUsers] = useState([]);
  let getData = async () => {
    try {
      let { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let shared = {
    mobile: "8007070845",
    users,
  };
  return (
    <BasicDetailsContext.Provider value={shared}>
      {props.children}
    </BasicDetailsContext.Provider>
  );
}
