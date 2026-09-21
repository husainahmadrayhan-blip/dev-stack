function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="your-stack">
      <div className="stack-header"><div><p className="eyebrow">YOUR COLLECTION</p><h2>Your Stack</h2></div><span className="stack-number">{stack.length}</span></div>
      {stack.length === 0 ? (
        <div className="stack-empty"><div className="empty-icon">＋</div><h3>Your stack is empty</h3><p>Add technologies from the list to build your stack.</p></div>
      ) : (
        <>
          <div className="stack-items">{stack.map((technology) => (
            <div className="stack-item" key={technology.id}><img src={technology.icon} alt="" /><div className="stack-item-info"><strong>{technology.name}</strong><span>{technology.category}</span></div><button className="remove-button" onClick={() => onRemove(technology.id)} aria-label={`Remove ${technology.name}`}>×</button></div>
          ))}</div>
          <button className="remove-all" onClick={onRemoveAll}>Remove All</button>
        </>
      )}
    </aside>
  );
}
export default YourStack;