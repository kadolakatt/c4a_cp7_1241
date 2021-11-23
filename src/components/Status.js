function Status(props) {
    return (
        props.status ? <span className="badge rounded-pill bg-success">{ props.activo }</span> :
                       <span className="badge rounded-pill bg-danger">{ props.inactivo }</span>
    );
}

export default Status;