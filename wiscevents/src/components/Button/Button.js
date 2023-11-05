import './Button.css'
export default function Button(props) {
    return <a href={props.dest}><button className="button" > {props.name} </button></a>
  }