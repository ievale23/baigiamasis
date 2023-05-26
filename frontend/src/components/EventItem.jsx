import axios from "axios";

export const EventItem = ({ event }) => {
  const { id, title, date, name, surname, email, phoneNo } = event;

  const handleDelete = (e) => {
    axios
      .delete(`http://localhost:5000/events/${id}`)
      .then((response) => {
        window.location.reload();
      })
      .catch((err) => console.log("err", err));
  };

  return (
    <>
      <div>
        <div> {title} </div>
        <div> {date} </div>
        <div> {name} </div>
        <div> {surname} </div>
        <div> {email} </div>
        <div> {phoneNo} </div>
        <button onClick={handleDelete}>Delete event</button>
      </div>
    </>
  );
};
