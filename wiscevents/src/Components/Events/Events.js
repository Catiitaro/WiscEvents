import {
    useParams
  } from "react-router-dom";
  import './Events.css'
export default function Events(props) {
    let {eventId} = useParams();
    return (<div className="events">
        Events <br/>
        Id: {eventId}
        <img src={props.events[eventId-1].image} />
    </div>)
}