import ExpenseItem from "../Expenses/ExpenseItem";
import ExpensesData from "../Expenses/ExpensesData";
import NewExpense from "../NewExpense/NewExpense";
import "../../css/Expenses.css";
import Card from "../UI/Card";
// import "../css/Card.css";
function RenderExpenses() {
  const generateNewExpense = (expense) => {
    console.log("in render.js");
    console.log(expense);
    // ExpensesData.push({
    //   id: expense.id,
    //   title: expense.title,
    //   amount: expense.amount,
    //   date: expense.date,
    // });
    // console.log(ExpensesData);
  };

  return (
    <Card className="expenses">
      <NewExpense addExpenseHere={generateNewExpense} />
      {ExpensesData.map((insurance) => {
        return (
          <div key={insurance.id}>
            <ExpenseItem
              title_={insurance.title}
              amount_={insurance.amount}
              date_={insurance.date}
            />
          </div>
        );
      })}
    </Card>
  );
}
export default RenderExpenses;
