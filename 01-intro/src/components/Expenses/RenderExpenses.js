import ExpenseItem from "../Expenses/ExpenseItem";
import ExpensesData from "../Expenses/ExpensesData";
import "../../css/Expenses.css";
import Card from "../UI/Card";
// import "../css/Card.css";
function RenderExpenses() {
  return (
    <Card className="expenses">
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
