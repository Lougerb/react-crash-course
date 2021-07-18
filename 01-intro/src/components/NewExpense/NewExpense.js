import React from "react";
import ExpenseForm from "./ExpenseForm";
// import ExpenseItem from "../Expenses/ExpenseItem";
import "../../css/NewExpense.css";

const NewExpense = (props) => {
  // Will get the data from the form
  const saveDataHandler = (getExpenseData) => {
    const newExpenseData = {
      id: Math.floor(Math.random() * 100 + 1),
      ...getExpenseData,
    };
    props.addExpenseHere(newExpenseData);
    console.log(newExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveDataHandler} />
    </div>
  );
};

export default NewExpense;
