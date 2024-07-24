import Button from "./Button";

function FormAddFriend() {
  return (
    <form action="" className="form-add-friend">
      <label htmlFor="friendName">👬Friend Name</label>
      <input type="text" />

      <label htmlFor="image">📷 Image URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
