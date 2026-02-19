import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__left">
          <span className="footer__logo">AK<span className="footer__logo-dot" /></span>
          <span className="footer__copy">© {new Date().getFullYear()} Aditya Kumar. All rights reserved.</span>
        </div>
        <div className="footer__links">
          <a href="mailto:adityakrmodak@gmail.com" className="footer__link">Email</a>
          <a href="https://www.linkedin.com/in/aditya-kumar" target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a>
          <a href="tel:+919470360511" className="footer__link">Phone</a>
        </div>
      </div>
    </footer>
  );
}
