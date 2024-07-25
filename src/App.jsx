import React, { useState } from "react";
import "./App.css";
import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";
import { initialFriends } from "../public/friends";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show);
  };

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false); //hides form after adding a friend
  };

  const handleSelection = (friend) => {
    setSelectedFriend((currState) =>
      currState?.id === friend.id ? null : friend
    );
    setShowAddFriend(false); //closes add friend form if a friend is selected
  };

  return (
    <>
      <h1 className="app-title">Eat-'N-Split App</h1>

      <div className="app">
        <div className="sidebar">
          <FriendsList
            friends={friends}
            onSelection={handleSelection}
            selectedFriend={selectedFriend}
          />

          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

          <Button onClick={handleShowAddFriend}>
            {showAddFriend ? "Close" : "Add friend"}
          </Button>
        </div>

        {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
      </div>
    </>
  );
}

export default App;
