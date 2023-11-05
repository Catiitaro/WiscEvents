import './Navbar.css'
import Button from '../Button/Button'
import logo from '../../images/wiscevents1.webp'


export default function Navbar(props) {
    return (
    <div className="header">
    <a href="/"> <img src={logo} className="logo"/> </a>


    <Button dest="/explore" name="Explore Events"/>
    <Button dest="/create-event" name="Create New Event"/>
    <div className="header-right">
        {!props.isAuthenticated ? 
        (<Button dest="/signin" name="Sign In"/>)
            : (<Button dest="/profile" name="Profile"/>)
    }
    </div>
    </div>
    );
}