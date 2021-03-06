function Modal_78(props) {
    return(
        <div className="modal">
            <p>{props.text}</p>
            <button className="btn btn--alt" onClick={props.onClose}>Cancel</button>
            <button className="btn" onClick={props.onClose}>Confirm</button>
        </div>
    )
}

export default Modal_78