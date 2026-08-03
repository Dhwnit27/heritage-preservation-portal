import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import "../styles/MonumentPage.css";
import "./HampiPage.css";

import hampi1 from "../assets/images/Hampi-1.jpg";
import hampi2 from "../assets/images/Hampi-2.jpg";
import hampi3 from "../assets/images/Hampi-3.jpg";

function HampiPage() {
  return (
    <>
      <Navbar />

      <main className="page hampi-page">

        <Link to="/india" className="back-btn">
          ← Back to India
        </Link>

        {/* Hero Section */}

        <section className="monument-hero">

          <h1 className="monument-title">
            🪨 Hampi
          </h1>

          <img
            src={hampi1}
            alt="Hampi"
            className="monument-image"
          />

          <p className="monument-location">
            📍 Karnataka, India
          </p>

          <p className="hampi-intro">
            Hampi is an ancient city filled with magnificent temples,
            giant boulders, royal complexes, and breathtaking landscapes.
            It was once the glorious capital of the Vijayanagara Empire.
          </p>

        </section>

        {/* Story */}

        <section className="monument-section">

          <h2>🏺 The Lost Empire</h2>

          <p>
            Hampi flourished during the 14th to 16th centuries as the capital
            of the Vijayanagara Empire. It was one of the richest and largest
            cities in the world during its time. Today, its fascinating ruins,
            temples, markets, and stone monuments attract visitors from around
            the globe.
          </p>

        </section>

        {/* Facts */}

        <section className="monument-section">

          <h2>📋 Quick Facts</h2>

          <div className="facts-grid">

            <div className="fact-card card">
              <h3>📅 Established</h3>
              <p>14th Century</p>
            </div>

            <div className="fact-card card">
              <h3>👑 Empire</h3>
              <p>Vijayanagara Empire</p>
            </div>

            <div className="fact-card card">
              <h3>📍 State</h3>
              <p>Karnataka</p>
            </div>

            <div className="fact-card card">
              <h3>🌍 UNESCO</h3>
              <p>World Heritage Site</p>
            </div>

          </div>

        </section>

        {/* Gallery */}

        <section className="monument-section">

          <h2>🖼 Gallery</h2>

          <div className="gallery-grid">

            <img src={hampi1} alt="Hampi Temple" />

            <img src={hampi2} alt="Stone Chariot" />

            <img src={hampi3} alt="Ancient Ruins" />

          </div>

        </section>

        {/* Fun Fact */}

        <section className="monument-section">

          <h2>💡 Did You Know?</h2>

          <p>
            The famous Stone Chariot of Hampi appears on the ₹50 Indian
            currency note and has become one of the most recognizable symbols
            of India's rich architectural heritage.
          </p>

        </section>

        {/* Visit */}

        <section className="monument-section">

          <h2>🧳 Plan Your Visit</h2>

          <div className="visit-grid">

            <div className="visit-card card">
              <h3>🕒 Timings</h3>
              <p>6:00 AM – 6:00 PM</p>
            </div>

            <div className="visit-card card">
              <h3>🎟 Entry</h3>
              <p>Available at the Archaeological Survey of India ticket counter.</p>
            </div>

            <div className="visit-card card">
              <h3>🌤 Best Season</h3>
              <p>October – February</p>
            </div>

          </div>

        </section>

        {/* Navigation */}

        <section className="monument-navigation">

          <Link to="/konark" className="nav-btn">
            ⬅ Konark
          </Link>

          <Link to="#" className="nav-btn">
            More Coming Soon ➡
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default HampiPage;