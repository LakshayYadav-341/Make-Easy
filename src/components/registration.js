import React from "react";

export default function Registration() {
  return (
    <div className="registration--section">
      <div className="regestration" id="regestration">
        <div className="regestration-grid">
          <div className="regestration-card1">
            <img
              className="regestration-image"
              src={require("../images/regestration.png")}
              alt=""
            />
          </div>
          <div className="regestration-card2">
            <h1>START YOUR FREE TRAIL TODAY</h1>
            <h4>No credit card required. T&C Apply.</h4>
            <button className="btn btn-lg btn-dark regestration-btn">
              SIGN UP FOR FREE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
