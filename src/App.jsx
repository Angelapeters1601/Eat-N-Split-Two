import React, { useState } from "react";
import "./App.css";
import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";
import { initialFriends } from "../public/friends";

function App() {
  const [showAddFriend, setshowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  const handleShowAddFriend = () => {
    setshowAddFriend((show) => !show);
  };

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setshowAddFriend(false); //hides form after adding a friend
  };

  return (
    <>
      <h1 className="app-title">Eat-'N-Split App</h1>

      <div className="app">
        <div className="sidebar">
          <FriendsList friends={friends} />
          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
          <Button onClick={handleShowAddFriend}>
            {showAddFriend ? "Close" : "Add friend"}
          </Button>
        </div>
        <FormSplitBill />
      </div>
    </>
  );
}

export default App;
