import React, { useState } from "react";

export default function AddIncomeForm({ increaseBalance, onCancel }) {
  const [income, setIncome] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    increaseBalance(income);
  };
  const handleCancel = () => {
    setIncome("");
    onCancel();
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setIncome("")}>
          &times;
        </span>
        <h2>Add Balance</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Income Amount"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            required
          />
          <div>
            <button type="submit">Add Income</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
