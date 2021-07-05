import "../../css/ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date_} />
      <div className="expense-item__description">
        <h2>{props.title_}</h2>
        <div className="expense-item__price">${props.amount_}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
