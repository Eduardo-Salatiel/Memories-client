import './style.scss';

const Footer = () => {
  return (
    <div className="footer">
      <h2 className="footer-title">Contacto</h2>
      <nav className="footer-menu">
        <ul>
          <li>
            <a href="https://www.facebook.com/eduardo.uribe.1694/">
              <span> Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/eduardo-salatiel-uribe-jaramillo-853123207/">
              <span> Linkedin</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/dr3ams_dancer/">
              <span> Pinterest</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
