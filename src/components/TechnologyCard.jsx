function TechnologyCard({ technology, onAdd, isAdded }) {
  return (
    <article className="technology-card">
      <div className="card-top"><div className="tech-icon"><img src={technology.icon} alt="" /></div><span className="badge">{technology.badge}</span></div>
      <h3>{technology.name}</h3>
      <p className="tech-description">{technology.description}</p>
      <div className="tech-meta"><span className="chip">{technology.category}</span><span className="difficulty">{technology.difficulty}</span></div>
      <div className="card-bottom"><span className="rating">★ {technology.rating}</span>
        <button className={`add-button ${isAdded ? "added" : ""}`} onClick={() => onAdd(technology)} disabled={isAdded}>{isAdded ? "✓ Added to Stack" : "Add to Stack"}</button>
      </div>
    </article>
  );
}
export default TechnologyCard;