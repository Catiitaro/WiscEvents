import ls from 'local-storage'
import {Navigate} from 'react-router-dom'
import {Fragment} from "react"
export default function Profile(props) {
    console.log("profile " + props);
    function handleSignOut() {
        props.setUser({}); ls.set("user", {});
        props.setAuthenticated(false); ls.set("isAuthenticated", false);
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