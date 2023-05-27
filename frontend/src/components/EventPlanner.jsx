import { EventPlannerForm } from "./EventPlannerForm";
import { EventList } from "./EventList";
import "../styles/styles.css";

export const EventPlanner = () => {
  return (
    <div className="eventContainer">
      <EventPlannerForm />
      <EventList />
    </div>
  );
};
