import React from "react";
import "../more.css";
import m1 from "../images/more1.png";
import m2 from "../images/more2.png";
import m3 from "../images/more3.png";
import m4 from "../images/more4.png";
export default function WhatWeDo() {
  return (
    <>
      <div className="box">
        <div className="box1">
            <img src={m1} alt="" />
            <h3>90+</h3>
            
            <p>Projects</p>
        </div>
        <div className="box1">
            <img src={m2} alt="" />
            <h3>85+</h3>
            <p>Clients</p>
        </div>
        <div className="box1">
            <img src={m3} alt="" />
            <h3>300+</h3>
            <p>Coffee</p>
        </div>
        <div className="box1">
            <img src={m4} alt="" />
            <h3>93%</h3>
            <p>Retention Rate</p>
        </div>
      </div>
    </>
  );
}
