import React from 'react'
import pic3 from "../images/image3.png";


export default function Vision() {
    const mystyle = {
        display: "flex",
        justifyContent: "space-around",
        marginTop : "5rem",
        flexWrap : "wrap"
      };
  return (
    <div>
        <div className="container " style={mystyle}>
      <div className="msn" id="msn2">
          <img src={pic3} alt="" style ={{width :"25rem",height : "23rem"}}/>
        </div>s
        <div className="msn" id="msn1" style={{width : "24rem", marginTop : "6rem"}}>
          <h1>Our VISION</h1>
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
        
      </div>
      <div className="container">
        <h1 style={{fontSize : "11rem",textAlign : "end", opacity : "0.1", marginTop : "-2rem"}}>
          VISION
        </h1>
      </div>
    </div>
  )
}
