export default function ExpenseTable({ itemData, onDeleteItem, onSelect }) {
  const totalAmount = itemData.reduce((acc, cur) => acc + cur.amount, 0);
  if (totalAmount === 0) {
    return null;
  }
  return (
    <div className="expense-table">
      <table>
        <thead>
          <tr>
            <th>Actions</th>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {itemData.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="action" onClick={() => onSelect(item)}>
                  📝
                </div>
                <div className="action" onClick={() => onDeleteItem(item.id)}>
                  ❌
                </div>
              </td>
              <td>{item.name}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>Total Amount</td>
            <td>{totalAmount}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
