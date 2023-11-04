import './Navbar.css'
import Button from '../Button/Button'
export default function Navbar() {
    return (<div class="header">
    <a href="#default" class="logo">CompanyLogo</a>
    <Button name="Explore Events"/>
    <Button name="Create New Event"/>
    <Button name="Profile"/>
    </div>);
}