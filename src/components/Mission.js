import React from 'react'
import pic2 from "../images/image2.png";

export default function Mission() {
    const mystyle = {
        display: "flex",
        justifyContent: "space-around",
        marginTop : "5rem",
        flexWrap : "wrap"
      };
  return (
    <div><div className="container " style={mystyle}>
    <div className="msn" id="msn1" style={{width : "24rem", marginTop : "6rem"}}>
      <h1>Our Mission</h1>
      <br/>
      <br/>
      <p>
        We believe in serving quality services which can meet
        customersrequirements. Our vision is to bring out the best in
        people, technology andprocesses with top-notch quality. We build
        customer experience. Our mission is to place a consistent innovation
        to bring about an ultimate crest of triumph as our service.
      </p>
    </div>
    <div className="msn" id="msn2">
      <img src={pic2} alt="" style ={{width :"23rem"}}/>
    </div>
  </div>
  <div className="container">
    <h1 style={{fontSize : "10rem",marginLeft : "5rem", opacity : "0.1"}}>
      MISSION
    </h1>
  </div></div>
  )
}
