import { useState } from "react";

export default function EditExpense({ item, onClose, onUpdateItems }) {
  const [newAmount, setNewAmount] = useState("");

  function handleUpdate(e) {
    e.preventDefault();

    if (!newAmount) return;

    const newItem = { ...item, amount: newAmount };
    onUpdateItems(newItem);
  }

  return (
    <form className="form" onSubmit={handleUpdate}>
      <div className="close" onClick={onClose}>
        ✖️
      </div>
      <p>
        Item Name: <span>{item.name}</span>
      </p>

      <div className="edit-form-field">
        <label>💵 Expense Amount </label>
        <input
          type="number"
          placeholder={item.amount}
          value={newAmount}
          onChange={(e) => setNewAmount(Number(e.target.value))}
        />
      </div>

      <button>Update Item</button>
    </form>
  );
}
