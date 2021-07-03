import "../css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date_} />
      <div className="expense-item__description">
        <h2>{props.title_}</h2>
        <div className="expense-item__price">${props.amount_}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
