import "./Features.css";

function Features() {
  return (
    <section>
      <h2>Our Heritage Categories</h2>

     <div>
  <div className="feature-card">
    <h3>🏛️ Monuments</h3>
    <p>Discover famous historical monuments around the world.</p>
    <button>Explore</button>
  </div>

  <div className="feature-card">
    <h3>🎭 Culture</h3>
    <p>Explore traditions, festivals, and cultural heritage.</p>
    <button>Explore</button>
  </div>

  <div className="feature-card">
    <h3>📜 Traditions</h3>
    <p>Learn about customs passed down through generations.</p>
    <button>Explore</button>
  </div>

  <div className="feature-card">
    <h3>📚 History</h3>
    <p>Understand important historical events and stories.</p>
    <button>Explore</button>
  </div>
</div>
    </section>
  );
}

export default Features;