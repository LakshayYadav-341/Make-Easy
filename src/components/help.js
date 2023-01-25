import React from "react";

export default function Help() {
  return (
    <div className="help--section">
      <div className="help" id="help">
        <h1>Want Help ?</h1>
        <h2>Contact us 24X7.</h2>
        <div className="help-email">
          <input
            type="email"
            className="help-email-input"
            size="30"
            name="email"
            id=""
          />
          <input type="submit" className="help-email-input" />
        </div>
      </div>
    </div>
  );
}
