import ls from 'local-storage'
import {Navigate} from 'react-router-dom'
import {Fragment} from "react"
import madhacks from '../../images/madhacks.avif'
import cheesehacks from '../../images/CheeseHacks.jpg'
export default function Profile(props) {
    console.log("profile " + props);
    function handleSignOut() {
        props.setUser({}); ls.set("user", {});
        props.setAuthenticated(false); ls.set("isAuthenticated", false);
        ls.set("events", [{
            id: 1,
            title: 'CheeseHacks Hackathon',
            image: cheesehacks,
            description: <a href="https://cheesehacks.webdevuw.org">This is a hackathon!</a>,
          },
          {
            id: 2,
            title: 'MadHacks Hackathon',
            image: madhacks,
            description: <a href="https://www.madhacks.io">This is also a hackathon.</a>,
          },]);
      }
    return (
        ls.get("isAuthenticated") ?
    <div className="profile">
        <button onClick={handleSignOut}>Sign Out</button>
          <div className="user-profile">
            <img src={props.user.picture} alt="User Profile" />
            <h2>{props.user.name}</h2>
            <p>Email: {props.user.email}</p>
          </div>
    </div> :
    <Fragment>
        <Navigate to="/" replace={true}/>
    </Fragment>

    )
}