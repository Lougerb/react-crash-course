import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "Bonk Insurance", amount: 351.58, date: new Date(2021, 3, 1) },
    { title: "Truck Insurance", amount: 458.69, date: new Date(2021, 3, 2) },
    { title: "Gun Insurance", amount: 285.14, date: new Date(2021, 3, 3) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>Lmao testing</p>
      <ExpenseItem
        title_={expenses[0].title}
        amount_={expenses[0].amount}
        date_={expenses[0].date}
      />
      <ExpenseItem
        title_={expenses[1].title}
        amount_={expenses[1].amount}
        date_={expenses[1].date}
      />
      <ExpenseItem
        title_={expenses[2].title}
        amount_={expenses[2].amount}
        date_={expenses[2].date}
      />
      <ExpenseItem
        title_={expenses[3].title}
        amount_={expenses[3].amount}
        date_={expenses[3].date}
      />
    </div>
  );
}

export default App;
