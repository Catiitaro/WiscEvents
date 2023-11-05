import {
    useParams
  } from "react-router-dom";
  import './Events.css'
export default function Events(props) {
    let {eventId} = useParams();
    let event = props.events[eventId-1]
    return (
    <div className="events">
        <h1 className="event-title">{event.title}</h1>
        <img className="event-image" src={event.image}/>
        <p className="event-description" dangerouslySetInnerHTML={{__html: event.description}}></p>
        <p>Time: {event.time}</p>
        <p>Date: {event.date}</p>
        <p>Cost: {event.cost}</p>
    </div>)
}