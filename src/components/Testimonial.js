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
      
      
      
    </>
  );
}
