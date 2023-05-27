import axios from "axios";
import { StyledEventItem } from "../styles/StyledEventPlanner";
import Button from "react-bootstrap/esm/Button";

export const EventItem = ({ event }) => {
  const { id, name, surname, email, phoneNo } = event;

  const handleDelete = (e) => {
    axios
      .delete(`http://localhost:5000/events/${id}`)
      .then((response) => {
        alert(`${name} ${surname} nebegali dalyvauti?`);
        window.location.reload();
      })
      .catch((err) => console.log("err", err));
  };

  return (
    <>
      <StyledEventItem>
        <div> {name} </div>
        <div> {surname} </div>
        <div> {email} </div>
        <div> {phoneNo} </div>
        <Button variant="warning" size="sm" onClick={handleDelete}>
          Ištrinti
        </Button>
      </StyledEventItem>
    </>
  );
};
