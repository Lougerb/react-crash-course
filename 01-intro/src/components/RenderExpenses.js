import ExpenseItem from "./ExpenseItem";
import ExpensesData from "./ExpensesData";
import "../css/Expenses.css";
function RenderExpenses() {
  return (
    <div className="expenses">
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
    </div>
  );
}
export default RenderExpenses;
