import React, { useState } from "react";

export default function AddExpenseForm({ addExpense, onCancel }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ title, amount, category, date });
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  };
  const handleCancel = () => {
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
    onCancel();
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleCancel}>
          &times;
        </span>
        <h2>Add Expense</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="expense/income"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <div>
            {" "}
            <button type="submit">AddExpense</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
