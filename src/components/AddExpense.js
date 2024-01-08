import { useState } from "react";

export default function AddExpense({ onAddingItem }) {
  const [itemName, setItemName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!itemName || !expenseAmount) return;

    const newId = crypto.randomUUID();

    const newItem = {
      id: newId,
      name: itemName.charAt(0).toUpperCase() + itemName.slice(1),
      amount: expenseAmount,
    };

    onAddingItem(newItem);

    setItemName("");
    setExpenseAmount("");
  }

  return (
    <form className="add-expense" onSubmit={handleSubmit}>
      <h2>EXPENSE TRACKER</h2>

      <div className="form-field">
        <label>📒 Item Name </label>
        <input
          type="text"
          placeholder="Name..."
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label>💵 Expense Amount </label>
        <input
          type="number"
          placeholder="Amount..."
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(Number(e.target.value))}
        />
      </div>

      <button>Add Item</button>
    </form>
  );
}
