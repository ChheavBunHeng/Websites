import React from 'react';
// import '../css/Footer.css'; // Replace 'Footer.css' with the actual name of your CSS file
import '../css/Footer.css'; // Replace 'Footer.css' with the actual name of your CSS file
// import { Link }

const Footer = () => {
  return (
    <div className="footer">
      <div className="QRcode">
        <div className="detail">
          <h1>QR Code</h1>
          <img src="" alt="Cito Qr code" />
        </div>
      </div>
      <div className="SocialMedia">
        <div className="detail">
          <h1>Social Media</h1>
          <i className="fab fa-facebook">
            <a href="https://web.facebook.com/citocomputers">Facebook</a>
          </i>
          <i className="fab fa-telegram">
            <a href="https://t.me/citocomputer">Telegram</a>
          </i>
          <i className="fab fa-youtube">
            <a href="https://www.youtube.com/@citocomputer">Youtube</a>
          </i>
        </div>
      </div>
      <div className="Contact_info">
        <div className="detail">
          <h1>Contact Info</h1>
          <i className="fas fa-phone-alt">
            <a href="#">(+855) 099 999 999</a>
          </i>
          <i className="fas fa-phone-alt">
            <a href="#">(+855) 099 999 999</a>
          </i>
          <i className="fas fa-envelope">
            <a href="#">Email</a>
          </i>
          {/* <i className="fas fa-map-marker-alt">
            <a href="#">Address</a>
          </i> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
