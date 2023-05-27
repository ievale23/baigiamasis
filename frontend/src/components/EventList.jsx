import { useEffect, useState } from "react";
import { EventItem } from "./EventItem";
import { StyledEventList } from "../styles/StyledEventPlanner";

export const EventList = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((events) => {
        setEvents(events);
      });
  }, []);
  //   console.log("eventsplease", eventData);

  const mappedEvents = () =>
    events?.map((event) => <EventItem key={event.id} event={event} />);

  return (
    <StyledEventList>
      <div
        style={{ fontSize: "20px", padding: "0 0 15px 0", fontWeight: "600" }}
      >
        Studijų baigimo vakarėlio dalyviai:
      </div>
      <div> {mappedEvents()} </div>
    </StyledEventList>
  );
};
