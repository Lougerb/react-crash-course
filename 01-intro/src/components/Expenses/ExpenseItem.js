import "../../css/ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

import React, { useState } from "react";

// const clickHandler = () => {
//   console.log("clicked lmao");
//   const aFunc = () => {
//     console.log("new");
//   };
//   aFunc();
// };

function ExpenseItem(props) {
  const [title_, setTitle] = useState(props.title_);

  // const updateTitle = setTitle("Updated");
  const updateTitle = () => {
    setTitle("Updated");
    console.log(title_);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date_} />
      <div className="expense-item__description">
        <h2>{title_}</h2>
        <div className="expense-item__price">${props.amount_}</div>
      </div>
      <button onClick={updateTitle}>click me</button>
    </Card>
  );
}

export default ExpenseItem;
