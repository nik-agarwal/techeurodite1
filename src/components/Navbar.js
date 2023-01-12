import React from 'react'
import logo from "../images/logo.png";
import pic from "../images/search.png";
import pic2 from "../images/menu.png";

export default function Navbar() {
  return (

<nav className="navbar navbar-expand-lg  " >

<img src={logo} alt="" style={{width : "8rem",marginLeft : "11rem"}}/>
{/* <a className="navbar-brand" href="#">Navbar</a> */}
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
<div className="collapse navbar-collapse " id="navbarSupportedContent">
  <ul className="navbar-nav ms-auto">
    <li className="nav-item active">
      <a className="nav-link" href="/">HOME</a>
    </li>
    
    
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        WHAT WE DO
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="/">Action</a>
        <a className="dropdown-item" href="/">Another action</a>
      </div>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        HIRE EXPERTS
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="/">Action</a>
        <a className="dropdown-item" href="/">Another action</a>
      </div>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">COMPANY</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">SAY HELLO</a>
    </li>
    <img src = {pic} alt="" style={{margin : "0.5rem 1rem", width : "1.5rem",height : "1.5rem"}}/>
    <img src = {pic2} alt="" style={{margin : "0.5rem 1rem",width : "1.5rem",height : "1.5rem"}}/>
  </ul>
  {/* <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form> */}
</div>
</nav>

  )
}
