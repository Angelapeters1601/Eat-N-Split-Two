import Friend from "./Friend.jsx";

function FriendsList({ friends }) {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;
