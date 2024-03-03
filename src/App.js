import React from "react";
import Conditionals from "./Conditionals";
import List from "./List";
import Hook from "./Hook";
import "./App.css";
import Effect from "./Effect";
import Form from "./Form";
const App = () => {
  const handleClick = (name) => {
    console.log(`Hello ${name}`);
  };

  const [toggle, setToggle] = React.useState(true);

  const changeTheme = () => {
    setToggle(!toggle);
  };

  const styles = {
    backgroundColor: toggle ? "white" : "black",
    color: toggle ? "black" : "white",
  };

  return (
    <div style={styles}>
      <button onClick={changeTheme}>Theme</button>
      <p>Hello</p>
      <button onClick={() => handleClick("Atharva")}>Click</button>
      <Conditionals />
      <List />
      <Hook />
      <Form />
    </div>
  );
};

export default App;
