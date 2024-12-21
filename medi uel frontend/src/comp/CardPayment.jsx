import React, { useContext } from "react";
import "../sty/filter.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";

const CardPayment = () => {
  const { selectedDoctor } = useContext(AppContext);
  const navigate = useNavigate();
  
  const handleCardPayClick = () => {
    navigate("/Submit");
  };

  return (
    <div className="cphd">
      <div className="paycont">
        <p>Hey, Doctor confirmed your Appointment </p>
        <p>
          Make the payment and receive your Appointment letter from the Doctor
        </p>
        
        <div className="pycon">
          <div
            className="inppay"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <p>Billing Address</p>
            <input placeholder="Country" />
            <input placeholder="Address" />
            <input placeholder="City" />
            <input placeholder="State" />
            <input placeholder="Zip Code" />
          </div>
          <div
            className="inppay"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              style={{
                display: "flex",
                width: "285px",
                height: "65px",
                gap: "10px",
              }}
            >
              <label>Payment Method</label>
              <img
                style={{ width: "33px", height: "33px" }}
                src={"Mastercard.png"}
              />
              <img style={{ width: "33px", height: "33px" }} src={"Visa.png"} />
              <img
                style={{ width: "33px", height: "33px" }}
                src={"AmericanExpress.png"}
              />
              <img
                style={{ width: "33px", height: "33px" }}
                src={"Discover.png"}
              />
            </div>
            <p>Credit Card Details</p>
            <input placeholder="Name on Card" />
            <input placeholder="Card Number" />
            <input placeholder="Card Security" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>Consultation Fee</p>
              <p>Rs {selectedDoctor.fee}</p>
            </div>
            <button
              onClick={handleCardPayClick}
              style={{
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor: "rgba(222, 222, 222, 1)",
                width: "185px",
                height: "65px",
              }}
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPayment;