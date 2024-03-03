import React from "react";
function MadeGoal() {
  return <p>Hurray its a Goal!!</p>;
}

function MissedGoal() {
  return <p>Goal missed</p>;
}
const Conditionals = () => {
  const goal = false;
  //   if (goal) {
  //     return <MadeGoal />;
  //   } else {
  //     return <MissedGoal />;
  //   }
  return <div>{goal && <MadeGoal />}</div>;
};

export default Conditionals;
