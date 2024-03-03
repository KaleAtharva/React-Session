import React from "react";

const Form = () => {
  const [input, setInput] = React.useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <form>
      <label>
        Input:
        <input type="text" value={input} onChange={handleChange} />
      </label>
      <p>{input}</p>
    </form>
  );
};

export default Form;
