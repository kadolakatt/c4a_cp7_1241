function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="none">MINTIC</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="none">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="none">Noticias</a>
              </li>
            </ul>
            <form className="d-flex">
              <a className="btn btn-outline-light" href="login.html" type="submit">Login</a>
            </form>
          </div>
        </div>
      </nav>
    );
}
export default NavBar;