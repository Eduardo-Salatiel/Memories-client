import './style.scss';

const Footer = () => {
  return (
    <div className="footer">
      <h2 className="footer-title">Contacto</h2>
      <nav className="footer-menu">
        <ul>
          <li>
            <a href="https://www.facebook.com/eduardo.uribe.1694/" rel="noreferrer" target="_blank">
              <span> Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/eduardo-salatiel-uribe-jaramillo-853123207/" rel="noreferrer" target="_blank">
              <span> Linkedin</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/dr3ams_dancer/" rel="noreferrer" target="_blank">
              <span> Pinterest</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
