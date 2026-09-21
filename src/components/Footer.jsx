function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-main">
        <div className="footer-brand" id="about"><a className="brand" href="#home"><span className="brand-mark">D</span><span>Dev Stack</span></a><p>A simple technology stack builder for developers who want to explore and organize their favorite tools.</p><div className="socials"><a href="#contact">GitHub</a><a href="#contact">LinkedIn</a><a href="#contact">X</a></div></div>
        <div className="footer-column"><h4>Product</h4><a href="#technologies">Technologies</a><a href="#projects">Projects</a><a href="#home">Features</a></div>
        <div className="footer-column"><h4>Company</h4><a href="#about">About</a><a href="#contact">Contact</a><a href="#home">Community</a></div>
        <div className="footer-column"><h4>Legal</h4><a href="#contact">Privacy</a><a href="#contact">Terms</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Dev Stack. All rights reserved.</span><div><a href="#contact">Privacy Policy</a><a href="#contact">Terms of Service</a></div></div>
    </footer>
  );
}
export default Footer;