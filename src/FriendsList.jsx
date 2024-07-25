import Friend from "./Friend.jsx";

function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            onSelection={onSelection}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;
