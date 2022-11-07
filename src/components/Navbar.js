import React from "react";
import { Link } from "react-router-dom";
import "/Users/90539/Desktop/UserCrud/usercruddeneme/src/App.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar1 navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand text-light px-4">
            PERSON MANAGE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {/* <div className="navbar-nav">
              <Link to={"/"} className="nav-link text-light" aria-current="page">
                Home
              </Link>
              <Link to={"/add-user"} className="nav-link text-light">
                Add New Person
              </Link>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
