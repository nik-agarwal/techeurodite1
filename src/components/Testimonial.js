import React from "react";
import "../index1.css";

export default function Testimonial() {
  const commaStyle = {
    fonSize: "3rem",
    color: "grey",
    opacity: "0.4",
  };
  return (
    <>
      <div>
        <div className="remember">
          <p className="back_text">TESTIMONAILS</p>
          <p className="up_text">Few Words From Our Clients</p>
          <p className="para_text">
            Some valuable words from our loving and ever growing customers
          </p>
        </div>
      </div>
      <div className="container">
        <p className="text-center">
          <spin style={commaStyle}>"</spin>For my react native applications,
          Tejash and his team has provided me very professional and captivative
          app. They worked dedicatedly and keep me updated with project updates.
          I think that is the best support from the team for me. Thank you for
          the best application.
        </p>
      </div>
      <div className="img" style={{textAlign:"center"}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYpiAt7KtZCtAaSIirJQTHdCVjreCXDLrcr0wcr6uo-fhtdXZoxePYbEJcpfufw8ZUh4&usqp=CAU" alt="" style={{width:"6%", borderRadius:"50%", marginTop:"20px", height:"10%"}} />
        <h6>Rashiem Page</h6>
        <p>CEO</p>
      </div>

    </>
  );
}
