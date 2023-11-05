import './Navbar.css'
import Button from '../Button/Button'
import logo from '../../images/wiscevents1.webp'


export default function Navbar() {
    return (
    <div class="header">
    <a href="/"> <img src={logo} className="logo"/> </a>


    <Button dest="/explore" name="Explore Events"/>
    <Button dest="/create-event" name="Create New Event"/>
    <div class="header-right">
        <Button dest="/signin" name="Sign In"/>
    </div>
    </div>
    );
}