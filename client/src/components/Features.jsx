import "./Features.css";
import monumentImage from "../assets/images/monuments.jpg";
import cultureImage from "../assets/images/culture.jpg";
import traditionsImage from "../assets/images/traditions.jpg";
import historyImage from "../assets/images/history.jpg";

function Features() {
  return (
    <section id="features" className="features">
        
      <h2>Our Heritage Categories</h2>

     <div className="features-container">
  <div className="feature-card">
    <img src={monumentImage} alt="Monuments" />
    <h3>🏛️ Monuments</h3>
    <p>Discover famous historical monuments around the world.</p>
    <button>Explore</button>
  </div>

  <div className="feature-card">
    <img src={cultureImage} alt="Culture" />
    <h3>🎭 Culture</h3>
    <p>Explore traditions, festivals, and cultural heritage.</p>
    <button>Explore</button>
  </div>

  <div className="feature-card">
    <img src={traditionsImage} alt="Traditions" />
    <h3>📜 Traditions</h3>
    <p>Learn about customs passed down through generations.</p>
    <button>Explore</button>
  </div>

  <div className="feature-card">
    <img src={historyImage} alt="History" />
    <h3>📚 History</h3>
    <p>Understand important historical events and stories.</p>
    <button>Explore</button>
  </div>
</div>
    </section>
  );
}

export default Features;