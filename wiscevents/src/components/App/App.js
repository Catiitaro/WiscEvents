import logo from './logo.svg';
import './App.css';
function MyButton() {
  return <button class="button"> I'm a button </button>;
}
function App() {
  return (
    <div class="header">
      <a href="#default" class="logo">CompanyLogo</a> 
      <button class="button"> Explore Events </button>
      <button class="button"> Button 2 </button>
      <button class="button"> Button 3 </button>
      <button class="button"> Button 4 </button>
      
    </div>
  );
}
export default App;