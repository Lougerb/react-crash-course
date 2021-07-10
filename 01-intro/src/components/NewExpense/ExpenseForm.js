import React, { useState } from "react";
import "../../css/ExpenseForm.css";

// function to get value
// I made this to avoid copy paste
// const getFormValue = (setValue, event) => {
//   setValue(event.target.value);
// };

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Bad practice

  // Function to change values for inputed forms
  const titleChanger = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChanger = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChanger = (e) => {
    // getFormValue(setEnteredDate, e);
    setEnteredDate(e.target.value);
  };

  // getFormValue(titleChanger);
  // getFormValue(amountChanger);

  const submitHandler = (event) => {
    // prevent page refresh when pressed submit
    event.preventDefault();

    // Get data from entered info
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // Pass data
    props.onSaveExpenseData(expenseData);

    // Clear data from form "VALUES"
    // Note that  input must declare values in order to clear form
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    // console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChanger} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.1"
            step="0.01"
            onChange={amountChanger}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChanger}
          />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
