import React, { useState } from "react";
import "./App.css";
import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

function App() {
  const [showAddFriend, setshowAddFriend] = useState(false);

  const handleShhowAddFriend = () => {
    setshowAddFriend((show) => !show);
  };

  return (
    <>
      <h1 className="app-title">Eat-'N-Split App</h1>

      <div className="app">
        <div className="sidebar">
          <FriendsList />
          {showAddFriend && <FormAddFriend />}
          <Button onClick={handleShhowAddFriend}>
            {showAddFriend ? "Close" : "Add friend"}
          </Button>
        </div>
        <FormSplitBill />
      </div>
    </>
  );
}

export default App;
