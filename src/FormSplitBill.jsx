import Friend from "./Friend";
import Button from "./Button";

function FormSplitBill() {
  return (
    <form action="" className="form-split-bill">
      <h2>split a bill with {Friend.name}</h2>

      <label htmlFor="bill">💰Bill Value</label>
      <input type="text" />

      <label htmlFor="yourExpense">🧍‍♀️ Your Expense</label>
      <input type="text" />

      <label htmlFor="friendExpense">👬 {Friend.name} Expense</label>
      <input type="text" disabled />

      <label htmlFor="select">🤑 who is paying the bill ?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">x</option>
      </select>

      <Button>Split bills</Button>
    </form>
  );
}

export default FormSplitBill;
