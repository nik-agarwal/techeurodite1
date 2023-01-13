import React from "react";
import img1 from "../images/areaimg1.jpg";
import img2 from "../images/areaimg2.jpg";
import img3 from "../images/areaimg3.png";
import img4 from "../images/areaimg4.png";
import img5 from "../images/areaimg5.png";
import img6 from "../images/areaimg6.png";


export default function AreaExpertise() {
    const cardstyle ={
        width : "19rem",
        height : "13rem",
        margin : "2rem",
        alignItems : "center",
        border: "none"
        // border : "1px solid black",
        
    };
    const cardstyle2 ={
      width : "19rem",
      height : "13rem",
      margin : "2rem",
      alignItems : "center",
      // border : "1px solid black",
      border: "none",
      boxShadow: "1px 2px 20px 4px rgba(12,12,12,0.2)"
  };
  return (
    <>
    <div className="cont" style={{background: "rgb(245, 245, 245)" }}>
      <div>
        <h2 className="text-center my-5">Our Area Expertise</h2>
      </div>
      <div className="container" >
        <div style={{display : "flex" , flexWrap : "wrap" , justifyContent : "center", }}>

          <div className="card" style={cardstyle2} >
            <img className="card-img-top" src={img1} alt="" style={{width : "6rem",marginTop : "2rem"}} />
            <div className="card-body">
              <p className="card-title">Web Development</p>
            </div>
          </div>
          <div className="card" style={cardstyle}>
          <img className="card-img-top" src={img2} alt="" style={{width : "6rem",marginTop : "2rem"}} />
            <div className="card-body">
              <p className="card-title">e-commerce Web Development</p>
            </div>
          </div>
          <div className="card" style={cardstyle}>
          <img className="card-img-top" src={img3} alt="" style={{width : "6rem",marginTop : "2rem"}} />
            <div className="card-body">
              <p className="card-title">Mobile Application Development</p>
            </div>
          </div>

          <div className="card" style={cardstyle}>
          <img className="card-img-top" src={img4} alt="" style={{width : "6rem",marginTop : "2rem"}} />
            <div className="card-body">
              <p className="card-title">UI/UX Designing</p>
            </div>
          </div>
          <div className="card" style={cardstyle}>
          <img className="card-img-top" src={img5} alt="" style={{width : "6rem",marginTop : "2rem"}} />
            <div className="card-body">
              <p className="card-title">Digital Marketing</p>
            </div>
          </div>
          <div className="card" style={cardstyle}>
          <img className="card-img-top" src={img6} alt="" style={{width : "6rem",marginTop : "2rem"}} />
            <div className="card-body">
              <p className="card-title">Website & App Maintenance</p>
            </div>
          </div>


        </div>
      </div>
      </div>
    </>
  );
}
