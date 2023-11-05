import logo from '../../images/wiscevents1.webp';
import Button from '../Button/Button';
import './Navbar.css';


export default function Navbar() {
    return (
    <div class="header">
    <a href="/"> <img src={logo} className="logo"/> </a>


    <Button name="Explore Events" dest="/explore"/>
    <Button name="Create New Event" dest="/create-event"/>
    <div className="header-right">
        <Button name="Sign In" dest="/signin"/>
    </div>
    </div>
    );
}