import React from "react";
import logo from "../images/logo.png";
import logo2 from "../images/facebook.png";
import logo3 from "../images/twitter.png";
import logo4 from "../images/linkedin.png";

export default function footer() {
    const btnstyle ={
        background : "linear-gradient(to right, #FF512F 0%, #DD2476 41%, #FF512F 100%)",
        color : "white",
        width : "90%",
        borderRadius : "2rem"
    };
  return (
    <div>
      <div className="container" style={{display :"flex",marginTop :"5rem"}}>
        <div className="container" style={{width :"72rem",marginRight:"4rem"}}>
          <img src={logo} alt="" style={{width :"45%"}} />
          <p>
            Lorem Ipsumm is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <div className="container" style={{display :"flex" }}>
            <img className="mx-2" src={logo2} alt="" style={{width: "1.5rem" ,height : "1.5rem"}}/>
            <img className="mx-2" src={logo3} alt="" style={{width: "1.5rem" ,height : "1.5rem"}} />
            <img className="mx-2" src={logo4} alt="" style={{width: "1.5rem" ,height : "1.5rem"}} />
          </div>
        </div>
        <div className="container" style={{width :"55rem"}}>
          <h5>Quick Links</h5>
          <a className="nav-link" href="/">
            Web Development
          </a>
          <a className="nav-link" href="/">
            CMS & Commerce
          </a>
          <a className="nav-link" href="/">
            Mobile App Development
          </a>
          <a className="nav-link" href="/">
            Digital Marketing
          </a>
          <a className="nav-link" href="/">
            UI/UX Design
          </a>
        </div>
        <div className="container" style={{width :"55rem"}}>
          <h5>Company</h5>
          <a className="nav-link" href="/">
            Privacy Policy
          </a>
          <a className="nav-link" href="/">
            Terms Of Service
          </a>
          <a className="nav-link" href="/">
            Legal Info
          </a>
          <a className="nav-link" href="/">
            Knowledga Base
          </a>
          <a className="nav-link" href="/">
            Contact Us
          </a>
        </div>
        <div className="container" style={{width :"65rem"}}>
          <h5>Subscribe Our Newsletter</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's.
          </p>
          <button type="submit" className="btn d-grid gap-2 col-6 mx-auto" style={btnstyle}>
          Enter Your Email
        </button>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e7008b" fill-opacity="1" d="M0,32L60,58.7C120,85,240,139,360,160C480,181,600,171,720,144C840,117,960,75,1080,80C1200,85,1320,139,1380,165.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </div>
    
  );
}
