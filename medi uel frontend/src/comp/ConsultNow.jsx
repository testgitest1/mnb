import React from "react";
import "../sty/home.css";
import { useNavigate } from "react-router-dom";

const ConsultNow = () => {
  const navigate = useNavigate();

  const handleConsultClick = () => {
    navigate("/search-doc");
  };

  return (
    <div style={{ backgroundColor: 'rgb(179, 218, 217)', width: '100%', height: '100vh' }}>
      <div style={{ paddingLeft: "70px", paddingTop: "200px" }}>
        <p className="tdn">Talk to Doctor Now</p>
        <button style={{marginTop:'100px', color:'white', backgroundColor:'rgb(17,63,70)', borderRadius:'20px', padding:'0px 15px'}} className="consult-btn" onClick={handleConsultClick}>
          Consult Now
        </button>
      </div>
    </div>
  );
};

export default ConsultNow;