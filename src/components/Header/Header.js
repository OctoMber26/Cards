import React,{Fragment} from "react";
import "./Header.css";
import logo from "../images/Logo.png";
import menu from "../images/MenuIcon.svg";

const Header=()=>{
    return(
        <Fragment>
        <nav className="navbar navbar-expand-lg">
  <div className="container mt-4">
   <img className="logo" src={logo} />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"> <img src={menu} /></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </Fragment>
    )
}

export default Header;