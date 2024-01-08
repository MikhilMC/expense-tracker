import { useState } from "react";
import AddExpense from "./AddExpense";
import ExpenseTable from "./ExpenseTable";
import EditExpense from "./EditAmount";

export default function App() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  function handleAddItem(item) {
    setItems((curr) => [...curr, item]);
  }

  function handleDeleteItem(id) {
    setItems((curr) => curr.filter((item) => item.id !== id));
  }

  function handleSelect(item) {
    setSelectedItem(selectedItem?.id === item.id ? null : item);
  }

  function handleCloseUpdate() {
    setSelectedItem(null);
  }

  function handeleUpdateItems(newItem) {
    setItems((curr) =>
      curr.map((item) => (item.id === newItem.id ? newItem : item))
    );
    setSelectedItem(null);
  }

  return (
    <div className="App">
      <AddExpense onAddingItem={handleAddItem} />
      <div className="grid-container">
        <ExpenseTable
          itemData={items}
          onDeleteItem={handleDeleteItem}
          onSelect={handleSelect}
        />
        {selectedItem && (
          <EditExpense
            item={selectedItem}
            onClose={handleCloseUpdate}
            onUpdateItems={handeleUpdateItems}
          />
        )}
      </div>
    </div>
  );
}
