import './Navbar.css'
import Button from '../Button/Button'
import logo from '../../images/wiscevents1.webp'

export default function Navbar() {
    return (
    <div class="header">
    <a href="#home"> <img src={logo} class="logo"/> </a>
    <Button name="Explore Events"/>
    <Button name="Create New Event"/>
    <div class="header-right">
        <Button name="Sign In"/>
    </div>
    </div>
    );
}