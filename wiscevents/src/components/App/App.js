import './App.css'
import Button from '../Button/Button'
function App() {
  return (<div class="header">
    <a href="#default" class="logo">CompanyLogo</a>
    <Button name="Explore Events"/>
    <Button name="Create New Event"/>
    <Button name="Profile"/>
  </div>);
}
export default App;