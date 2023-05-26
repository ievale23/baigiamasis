import { useEffect, useState } from "react";
import { EventItem } from "./EventItem";

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
    <>
      <div>Renginių sąrašas</div>
      <div> {mappedEvents()} </div>
    </>
  );
};
