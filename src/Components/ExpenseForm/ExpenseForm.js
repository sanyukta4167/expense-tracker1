import React, { useState } from "react";

function ExpenseForm({ addTransaction }) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("Expense");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !description || !date) {
      alert("Please fill all fields!");
      return;
    }

    addTransaction({
      amount: parseFloat(amount),
      description,
      date,
      type,
    });

    // Clear form fields
    setAmount("");
    setDescription("");
    setDate("");
    setType("Expense");
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h3>Add Transaction</h3>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Expense">Expense</option>
        <option value="Income">Income</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default ExpenseForm;
