import React, { useState } from "react";
import Expenses from "./Expenses";
import ExpensesData from "../Expenses/ExpensesData";
import NewExpense from "../NewExpense/NewExpense";
import ExpensesFilter from "./ExpenseFilter";
import "../../css/Expenses.css";
import Card from "../UI/Card";

function RenderExpenses() {
  const [prevExpense, setPrevExpense] = useState(ExpensesData);

  const generateNewExpense = (getExpense) => {
    console.log("in render.js");
    // console.log(getExpense);
    // console.log();

    console.log(ExpensesData);
    // setPrevExpense([getExpense, ...prevExpense]);
    setPrevExpense((expenses) => {
      return [getExpense, ...expenses];
    });

    console.log(ExpensesData);
  };

  const [filterYear, setFilterYear] = useState("2020");
  const filterByYearHandler = (selectedYear) => {
    console.log("This is from RenderExpense.JS");
    setFilterYear(selectedYear);
    console.log(selectedYear.target.value);
  };

  // Generate new  expense
  //  const [newNewExpense, setNewNewExpense] = useState(Card)

  return (
    <Card className="expenses">
      <NewExpense addExpenseHere={generateNewExpense} />
      <ExpensesFilter
        defaultYear={filterYear}
        onChangeYear={filterByYearHandler}
      />
      {/* To render, get the data from the UseState */}
      <Expenses data={prevExpense} />
    </Card>
  );
}
export default RenderExpenses;
