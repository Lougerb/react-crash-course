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
    console.log(ExpensesData);
    setPrevExpense((expenses) => {
      return [getExpense, ...expenses];
    });

    console.log(ExpensesData);
  };

  const [filterYear, setFilterYear] = useState("2020");
  const [filteredNewExpense, setFilteredNewExpense] = useState(prevExpense);

  const filterByYearHandler = (selectedYear) => {
    console.log("This is from RenderExpense.JS");
    const userSelectedYear = selectedYear.target.value;
    setFilterYear(userSelectedYear);
    // console.log(userSelectedYear);
    console.log(prevExpense);
    console.log(filteredNewExpense);
    setFilteredNewExpense(
      prevExpense.filter(
        (expense) => expense.date.getFullYear() == userSelectedYear
      )
    );
  };

  return (
    <Card className="expenses">
      <NewExpense addExpenseHere={generateNewExpense} />
      <ExpensesFilter
        defaultYear={filterYear}
        onChangeYear={filterByYearHandler}
      />
      {/* To render, get the data from the UseState */}
      <Expenses data={filteredNewExpense} />
    </Card>
  );
}
export default RenderExpenses;
