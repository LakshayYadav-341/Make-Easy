import React from "react";
import ReactDOM from "react-dom/client";
export default function Navbar() {
  return (
    <div className="nav--bar">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="">
          <img
            className="Website-logo"
            width="30%"
            src="images/websiteLogo.png"
            alt="Website logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbartoggle01"
          aria-controls="navbartoggle01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbartoggle01">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle dropdown1"
                href="#"
                id="navbarDropdown1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>

              <ul
                className="dropdown-menu dropdown--menu"
                aria-labelledby="#navbarDropdown1"
              >
                <li className="dropdown-menu1--li1">
                  <a className="dropdown-item dropdown1" href="#products-h1">
                    Sell Anything
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#productsMidH1">
                    Sell Anything
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#products">
                    Create a Website
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#regestration">
                    Free Trail
                  </a>
                </li>
              </ul>
            </li>
            <li className="navbar-middle-button">
              <a href="#">
                <button className="btn btn-lg navbar-btn">Templates</button>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle dropdown1"
                href="#"
                id="navbarDropdown2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul
                className="dropdown-menu dropdown--menu"
                aria-labelledby="#navbarDropdown2"
              >
                <li className="dropdown-menu1--li1">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="navbar-button">
              <div className="get--started">
                <button className="btn btn-lg btn-dark navbar-btn get-started--btn">
                  GET STARTED
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
