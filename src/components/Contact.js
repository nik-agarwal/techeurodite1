import React from "react";
import "../index3.css"
export default function Contact() {
  const bgcolor ={
    backgroundColor : "#f7f7f7"
  };
  const btnstyle ={
      background : "linear-gradient(to right, #FF512F 0%, #DD2476 41%, #FF512F 100%)",
      color : "white",
      width : "24%",
      borderRadius : "2rem"
  };
  return (
    <div className="container"style={{marginTop:"4rem"}}>
      <h5 className="text-center my-2" style={{color : "rgb(203 195 195)"}}>GET IN TOUCH</h5>
      <h1 className="text-center">Contact Us</h1>
      <div className="container" style={{width:"40rem",marginTop:"3rem"}}>
      <form>
        <div className="form-row my-4" style={{display : "flex", flexWrap : "wrap", justifyContent: "space-between"}}>
          <div className="form-group col-md-5">
            <input type="text" className="form-control" id="inputName" placeholder="Name*" required style={bgcolor}/>
          </div>
          <div className="form-group col-md-5">
            <input type="email" className="form-control" id="inputEmail" placeholder="Email*" required style={bgcolor}/>
          </div>
        </div>
        <div className="form-group my-4">
          <input
            type="text" className="form-control" id="inputSubject" placeholder="Subject*" required style={bgcolor}/>
        </div>
        <div className="form-group my-4">
          <textarea className="form-control"  id="exampleFormControlTextarea1" rows="5"
          placeholder="Your Message*"  required style={bgcolor}></textarea>
        </div>

        <button type="submit" className="btn button d-grid gap-2 col-6 mx-auto" style={btnstyle}>
          SUBMIT
        </button>
      </form>
      </div>
    </div>
  );
}
