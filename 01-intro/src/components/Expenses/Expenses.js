import ExpenseItem from "./ExpenseItem";
// import ExpensesData from "./ExpensesData";
// eslint-disable-next-line
const Expenses = ({ data, selectedYear_ }) => {
  const newFilteredData =
    selectedYear_ == "All"
      ? data
      : data.filter(
          (filteredData) => filteredData.date.getFullYear() == selectedYear_
        );

  return newFilteredData.length == 0 ? (
    <p>No Data</p>
  ) : (
    newFilteredData.map((expense) => {
      // console.log(expense);
      return (
        <div key={expense.id}>
          <ExpenseItem
            title_={expense.title}
            amount_={expense.amount}
            date_={expense.date}
          />
        </div>
      );
    })
  );
  // return <p>sample</p>;
};
export default Expenses;
