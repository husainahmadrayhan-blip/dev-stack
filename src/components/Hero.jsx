function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="eyebrow">MODERN DEVELOPMENT</p>
        <h1>Build Your <span>Perfect Tech Stack</span></h1>
        <p className="hero-description">Discover the technologies you need to build modern, scalable and powerful web applications.</p>
        <div className="hero-actions">
          <a className="btn btn-primary btn-large" href="#technologies">Explore Technologies</a>
          <a className="btn btn-light btn-large" href="#about">Learn More</a>
        </div>
        <div className="hero-stats"><div><strong>12+</strong><span>Technologies</span></div><div><strong>3</strong><span>Skill Levels</span></div><div><strong>∞</strong><span>Possibilities</span></div></div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="code-window"><div className="window-dots"><i/><i/><i/></div>
          <div className="code-line wide"/><div className="code-line medium"/><div className="code-line short"/><div className="code-line medium"/><div className="code-line wide"/><div className="code-card"><span>&lt;/&gt;</span><strong>Build. Learn. Ship.</strong></div>
        </div>
      </div>
    </section>
  );
}
export default Hero;