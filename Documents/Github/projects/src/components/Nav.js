import React from "react";

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#3C3F58" }}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, auto)",
              gap: "2vh",
              height: "5vh",
              fontSize: "2.5vh",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Certificate
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
