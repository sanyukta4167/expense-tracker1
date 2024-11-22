import React, { useState } from "react";
import "./App.css";

import WalletBalance from "./Components/WalletBalance/WalletBalance";
import ExpenseForm from "./Components/ExpenseForm/ExpenseForm";
import TransactionList from "./Components/TransactionsList/TransactionsList";

function App() {
  const [transactions, setTransactions] = useState([]);

  // Function to add a transaction
  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }]);
  };

  // Function to delete a transaction
  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  // Calculate totals
  const totalIncome = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const netBalance = totalIncome - totalExpense;

  return (
    <div className="App">
      <h2>Expense Tracker</h2>
      <div className="container">
        <WalletBalance
          netBalance={netBalance}
          totalIncome={totalIncome}
          totalExpense={totalExpense}
        />
        <ExpenseForm addTransaction={addTransaction} />
      </div>
      <div className="secondcontainer">
        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />
      </div>
    </div>
  );
}

export default App;
