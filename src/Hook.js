import React from "react";

const Hook = () => {
  let a = 0;

  const [b, setB] = React.useState(0);

  const handleClick = () => {
    a++;
    setB(b + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <p>a: {a}</p>
      <p>b: {b}</p>
    </div>
  );
};

export default Hook;
