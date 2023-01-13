import React from 'react'
import img1 from "../images/logo1.png";
import img2 from "../images/logo2.png";
import img3 from "../images/logo3.png";
import img4 from "../images/logo4.jpg";

export default function brand() {
    const brandstyle ={
        display : "flex",
        flexWrap : "wrap",
        justifyContent : "space-evenly",
        marginTop : "4rem",
    };
    const imgstyle ={
        heightndColor : "9rem",
        width : "9rem"
    }
  return (
    <div className="container" style={brandstyle}>
      <img src={img1} alt="" style={imgstyle}/>
      <img src={img2} alt="" style={imgstyle}/>
      <img src={img3} alt="" style={imgstyle}/>
      <img src={img4} alt="" style={imgstyle}/>

    </div>
  )
}
