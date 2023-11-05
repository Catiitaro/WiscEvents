import './Navbar.css'
import Button from '../Button/Button'
import logo from '../../images/wiscevents1.webp'
export default function Navbar() {
    return (<div class="header">
    <img src={logo} class="logo"/>
    <Button name="Explore Events"/>
    <Button name="Create New Event"/>
    <Button name="Profile"/>
    </div>);
}