import { initialFriends } from "../public/friends.js";
import Friend from "./Friend.jsx";

function FriendsList() {
  const friends = initialFriends;

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
