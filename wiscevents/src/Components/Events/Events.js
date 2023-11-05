import {
    useParams
  } from "react-router-dom";
export default function Events() {
    let {eventId} = useParams();
    return (<div className="events">
        Events <br/>
        Id: {eventId}
    </div>)
}