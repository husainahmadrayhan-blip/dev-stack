function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#home"><span className="brand-mark">D</span><span>Dev Stack</span></a>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="#home">Home</a><a href="#technologies">Technologies</a><a href="#projects">Projects</a><a href="#about">About</a><a href="#contact">Contact</a>
      </nav>
      <div className="nav-actions"><button className="btn btn-outline">Sign In</button><button className="btn btn-primary">Sign Up</button></div>
      <button className="mobile-menu" aria-label="Open menu">☰</button>
    </header>
  );
}
export default Navbar;