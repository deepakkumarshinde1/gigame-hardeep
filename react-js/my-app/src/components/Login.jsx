import { Component, useEffect, useState } from "react";

const List = (props) => {
  let [state, setState] = useState("");

  useEffect(() => {
    // api
    return () => {
      // un mounting stage
    };
  }, []); // mounting stage

  useEffect(() => {
    // check for change in component
  }, [state]); // updating stage

  return <>Hello</>;
};

export default List;
