import ExpenseItem from "./ExpenseItem";
// import ExpensesData from "./ExpensesData";

const Expenses = (props) => {
  return props.data.map((expense) => {
    return (
      <div key={expense.id}>
        <ExpenseItem
          title_={expense.title}
          amount_={expense.amount}
          date_={expense.date}
        />
      </div>
    );
  });
};
export default Expenses;
