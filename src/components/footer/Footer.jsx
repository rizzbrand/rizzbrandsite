import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-col">
        <div className="footer-sub-col">
          <div className="footer-link">
            <Link to="mailto:rizzbrandit@gmail.com">
              &#x2192; info@rizzbrand.site
            </Link>
          </div>
          <div className="footer-link">
            <Link to="https://form.typeform.com/to/Hvk3bENp">
              &#x2192; Get Started
            </Link>
          </div>
        </div>
        <div className="footer-sub-col">
          <div className="footer-link">
            <Link to="https://www.instagram.com/rizzbrand.site/">
              &#x2192; Instagram
            </Link>
          </div>
          <div className="footer-link">
            <Link to="https://www.instagram.com/rizzbrand.site/">
              &#x2192; Chat
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-col">
        <div className="footer-link">
          <p>&copy; Rizzbrand Site 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
