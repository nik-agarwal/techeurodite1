import React from "react";
import '../index2.css';
import pic1 from "../images/image1.png";
import i2 from "../images/i2.png";

export default function About() {
  const mystyle = {
    display: "flex",
    justifyContent: "space-around",
    marginTop : "5rem",
    flexWrap : "wrap"
  };

  const mystyle2 = {
    width: "34rem",
    marginTop: "3rem",
  };
  return (
    <>
      <div>
        <div className="about_us">
          <div className="about_text">
            <h1>About Us</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae consectetur, doloremque pariatur consequuntur unde molestias nobis nulla debitis natus distinctio dicta amet quia vero veritatis mollitia, facere, laboriosam aperiam quas?</p>
          </div>
          <img src={i2} alt="" />
        </div>
        <h1 className="text-center">We grow brands</h1>
        <h1 className="text-center">What is Techerudite?</h1>
        <p className="text-center" style={{ margin: " 1rem 11rem" }}>
          Since its inception in 2014. Techerudite scrutinizes the needs of all
          customers and with the mass experience and talented people, we can
          create an online presence of your business for any type of industry.
          With the enormous skills in the web & mobile app development, UVUX
          design, digital marketing, we manage the entire creative process and
          stay available to provide robust solutions to solve complex tech
          snags.
        </p>
      </div>
      <div className="container" style={mystyle}>
        <div className="item" id="item1">
          <img src={pic1} alt="" style ={{width :"23rem",marginLeft : "2rem"}}/> 
        </div>
        <div className="item" id="item2">
          <p style={mystyle2}>
            Our tech mind offers expert, creative, scalable & high-quality
            solutions that fulfill your all requirements. We act ethically,
            deliver excellent solutions, respect your contribution. With
            nurturing trust, we analyze your requirements: put our heads into it
            to exceed customers' expectations. We offer best-suited services
            which fetch mutually profitable experience.
            <br />
            <br />
            With the huge client base all over the world, we build brands and
            build a long-lasting relationship with customers who reflect our
            success, struggle & a journey of making Happy Customers Customer
            satisfaction & success is our biggest achievement We grow by making
            people's dreams alive by creating outstanding websites, mobile apps,
            and captivating designs. This is what we want to be remembered by
            making a difference. Be a part of our organization we warmly welcome
            challengingprojects & innovation
          </p>
        </div>
      </div>
      

      {/* <div className="container " style={mystyle}>
      <div className="msn" id="msn2">
          <img src={pic3} alt="" style ={{width :"25rem",height : "23rem"}}/>
        </div>
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
      </div> */}

    </>
  );
}
