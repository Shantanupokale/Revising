import "./App.css";
import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseData from "./ExpenseData";

function App() {
  const [expenses, setExpenses]=useState(ExpenseData)
  return (
    <>
      <div>
 <h1>Track Your Expense</h1>
      <div class="expense-tracker">
        <ExpenseForm setExpenses={setExpenses}/>
        <ExpenseTable expenses={expenses} />
        <div className="context-menu">
            <div>Edit</div>
            <div>Delete</div>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
