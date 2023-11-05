import './ShittyButton.css'
export default function ShittyButton(props) {
    return <button className="shittybutton" onClick={props.onClick}> 
    {props.name} 
    </button>
  }