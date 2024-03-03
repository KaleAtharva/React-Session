import React from "react";

const List = () => {
  let list = [1, 2, 3, 4, 5];
  let list2 = list.map((item) => item * item);
  console.log(list2);

  const time = [
    {
      date: "12 / 2 / 2024",
      month: "May",
    },
    {
      date: "12 / 3 / 2024",
      month: "March",
    },
    {
      date: "22 / 9 / 2003",
      month: "September",
    },
    {
      date: "05 / 1 / 2003",
      month: "December",
    },
  ];

  return (
    <div>
      {time.map((obj) => {
        return (
          <>
            <p>Date: {obj.date}</p>
            <p>Month: {obj.month}</p>
          </>
        );
      })}
    </div>
  );
};

export default List;
