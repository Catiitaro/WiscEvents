import './Button.css'
export default function Button(props) {
    return <a href={props.dest}><button class="button"> {props.name} </button></a>
  }