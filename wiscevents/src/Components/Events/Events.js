import { useParams } from "react-router-dom";
import './Events.css';

export default function Events(props) {
  let { eventId } = useParams();
  let event = props.events[eventId - 1];

  return (
    <div className="events">
      <div className="event-image-container">
        <img className="event-image" src={event.image} alt={event.title} />
      </div>
      <div className="event-details">
        <h1 className="event-title">{event.title}</h1>
        <p className="event-description" dangerouslySetInnerHTML={{ __html: event.description }}></p>
        <p className="event-location">{"Location: " + event.location}</p>
        <p className="event-date">{"Date: " + event.date}</p>
        <p className="event-time">{"Time: " + event.time}</p>
      </div>
    </div>
  );
}
