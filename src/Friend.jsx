import Button from "./Button";

function Friend({ friend }) {
  return (
    <div>
      <li>
        <img src={friend.img} alt={friend.name} />
        <h3>
          {friend.name} ${Math.abs(friend.balance)}
        </h3>
        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} ${Math.abs(friend.balance)}
          </p>
        )}

        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you ${Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even.</p>}
        <Button>Select</Button>
      </li>
    </div>
  );
}

export default Friend;
