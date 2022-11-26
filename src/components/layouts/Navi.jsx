import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import SingedIn from "../pages/SingedIn";
import SingOut from "../pages/SingOut";

export default function Navi() {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Northwind
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/link" className="nav-link">
                  Link
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/action" className="dropdown-item">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link to="/anotheraction" className="dropdown-item">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="/somethingelsehere" className="dropdown-item">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div>{isLoggedIn ? <SingedIn /> : <SingOut />}</div>
          </div>
        </div>
      </nav>
    </div>
  );
}
