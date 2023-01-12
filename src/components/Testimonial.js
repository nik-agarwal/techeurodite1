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
          <p className="back_text">TESTIMONAiLS</p>
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
      
      <div className="container">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="..." alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="..." alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="..." alt="Third slide" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
}
