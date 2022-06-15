import React from "react";
import './Footer.css';

function Footer() {
  return (
      <div className="footer">
          <div className="footer_left">
            <p>Album and details</p>
          </div>
          <div className="footer_centre">
            <p>player controls</p>
          </div>
          <div className="footer_right">
            <p>volume control</p>
          </div>
      </div>
  )
}

export default Footer;
