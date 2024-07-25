import React, { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPying, setWhoIsPying] = useState("user");

  const handlePaidByUser = () => {
    setPaidByUser(
      Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
    );
  };

  return (
    <form action="" className="form-split-bill">
      <h2>split a bill with {selectedFriend.name}</h2>

      <label htmlFor="bill">💰Bill Value</label>
      <input
        type="text"
        id="bill"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor="yourExpense">🧍‍♀️ Your Expense</label>
      <input
        type="text"
        id="yourExpense"
        value={paidByUser}
        onChange={handlePaidByUser}
      />

      <label htmlFor="friendExpense">👬 {selectedFriend.name}'s Expense</label>
      <input type="text" id="friendExpense" value={paidByFriend} disabled />

      <label htmlFor="selectPayer">🤑 who is paying the bill ?</label>
      <select
        name="payer"
        id="selectPayer"
        value={whoIsPying}
        onChange={(e) => setWhoIsPying(Number(e.target.value))}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bills</Button>
    </form>
  );
}

export default FormSplitBill;
