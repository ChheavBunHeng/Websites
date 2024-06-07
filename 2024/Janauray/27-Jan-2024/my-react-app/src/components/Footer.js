import React from 'react';
import '../css/Footer.css'; // Replace 'Footer.css' with the actual name of your CSS file
import Qrcode from "react-qr-code";

const Footer = () => {
  return (
    <div className="footer">
        <div className="detail">
          <h1>More Info</h1>
          <Qrcode value='https://web.facebook.com/citocomputers'></Qrcode>
        </div>
      <div className="SocialMedia">
        <div className="detail">
          <h1>Social Media</h1>
          <a href="https://web.facebook.com/citocomputers">Facebook</a>
          <a href="https://t.me/citocomputer">Telegram</a>
          <a href="https://www.youtube.com/@citocomputer">Youtube</a>
        </div>
      </div>
      <div className="Contact_info">
        <div className="detail">
          <h1>Contact Info</h1>
          <a href="#">(+855) 099 999 999</a>
          <a href="#">(+855) 099 999 999</a>
          <a href="#">Email</a>
          {/* <a href="#">Address</a> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
