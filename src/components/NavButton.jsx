function NavButton(props) {
    return (<button type='button' id={props.id} onClick={() => props.setTValue(props.handler(props.t))}>{props.text}</button>)
}

export default NavButton;