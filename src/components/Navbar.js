import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav () {
  const [token, setToken] = useState(localStorage.getItem('token'));
  if (localStorage.getItem('role') === 'admin') {
      return (
      <div>
        <div className="row">
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark text-white">
            <div className="container-fluid">
              <img
                src="heartshop.png"
                alt="Assignment by Raisul Hridoy"
                width="120"
                height="40"
              ></img>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/manage-order">
                      Manage Order
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link" to="/manage-product">
                      Manage Product
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav d-flex">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="#">
                      Logged in as Admin
                    </Link>
                    </li>
                </ul>
              
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
  if (localStorage.getItem('role') === 'customer') {
    return (
      <div>
        <div className="row">
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark text-white">
            <div className="container-fluid">
              <img
                src="heartshop.png"
                alt="Assignment by Raisul Hridoy"
                width="120"
                height="40"
              ></img>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/your-order"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      My Order
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav d-flex">
                <li className="nav-item">
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="#">
                      Logged in as Customer
                    </Link>
                    </li>
                </ul>
              
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
  if (localStorage.getItem('role') === null) {
    return (
      <div>
        <div className="row">
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark text-white">
            <div className="container-fluid">
              <img
                src="heartshop.png"
                alt="Assignment by Raisul Hridoy"
                width="120"
                height="40"
              ></img>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                
                </ul>
                <ul className="navbar-nav d-flex">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/login">
                      Login
                    </Link>
                  </li>
                </ul>
              
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default Nav;
