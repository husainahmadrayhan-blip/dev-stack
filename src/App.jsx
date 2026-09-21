import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load technologies");
        return res.json();
      })
      .then(setTechnologies)
      .catch(() => toast.error("Could not load technology data."))
      .finally(() => setLoading(false));
  }, []);

  const handleAdd = (technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }
    setStack((current) => [...current, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id) => {
    const removed = stack.find((item) => item.id === id);
    setStack((current) => current.filter((item) => item.id !== id));
    if (removed) toast.info(`${removed.name} removed from your stack!`);
  };

  const handleRemoveAll = () => {
    if (!stack.length) {
      toast.warning("Your stack is already empty.");
      return;
    }
    setStack([]);
    toast.info("All technologies removed from your stack!");
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2200} />
      <Navbar />
      <main>
        <Hero />
        <section id="technologies" className="technologies-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">BUILD YOUR STACK</p>
              <h2>Choose Your Technologies</h2>
              <p>Pick the tools and technologies you want to include in your development stack.</p>
            </div>
            <div className="selected-count"><strong>{stack.length}</strong><span>Selected</span></div>
          </div>
          <div className="stack-layout">
            <div className="technology-grid">
              {loading ? (
                <div className="loading-box"><div className="spinner" /><p>Loading technologies...</p></div>
              ) : (
                technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    onAdd={handleAdd}
                    isAdded={stack.some((item) => item.id === technology.id)}
                  />
                ))
              )}
            </div>
            <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default App;