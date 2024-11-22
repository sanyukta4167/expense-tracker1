import React from "react";
import "./TransactionsList.css";

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div className="transaction-list">
      <h3>Recent Transactions</h3>
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id} className={transaction.type.toLowerCase()}>
              <div>
                <span>{transaction.description}</span>
                <span>{transaction.date}</span>
              </div>
              <div>
                <span>₹{transaction.amount}</span>
                <button onClick={() => deleteTransaction(transaction.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;
