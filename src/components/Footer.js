function Footer(props) {
    return (
        <footer className="bg-dark text-white mt-5">
          <div className="container">
              <div className="card bg-dark">
                  <div className="card-body">
                      <h2>{ props.compania }</h2>
                      <h4>{ props.division }</h4>
                      <p className="mb-1">Dirección: { props.direccion }</p>
                      <p className="mb-1">Teléfono: { props.telefono }</p>
                      <p className="mb-1">{ props.ciudad }</p>
                      <p className="mb-1">{ props.zipcode }</p>
                  </div>
              </div>
          </div>
      </footer>
    );
}

export default Footer;