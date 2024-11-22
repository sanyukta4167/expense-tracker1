import React from "react";
import "./WalletBalance.css";

function WalletBalance({ netBalance, totalIncome, totalExpense }) {
  return (
    <div className="wallet-balance">
      <h3>Wallet Balance</h3>
      <p>Net Balance: ₹{netBalance}</p>
      <p>Total Income: ₹{totalIncome}</p>
      <p>Total Expense: ₹{totalExpense}</p>
    </div>
  );
}

export default WalletBalance;
