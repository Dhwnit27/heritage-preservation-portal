import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import "../styles/MonumentPage.css";
import "./KonarkPage.css";

import konark1 from "../assets/images/Konark-1.jpg";
import konark2 from "../assets/images/Konark-2.jpg";
import konark3 from "../assets/images/Konark-3.jpg";

function KonarkPage() {
  return (
    <>
      <Navbar />

      <main className="page konark-page">

        <Link to="/india" className="back-btn">
          ← Back to India
        </Link>

        {/* Hero */}
        <section className="monument-hero">

          <h1 className="monument-title">
            ☀️ Konark Sun Temple
          </h1>

          <img
            src={konark1}
            alt="Konark Sun Temple"
            className="monument-image"
          />

          <p className="monument-location">
            📍 Konark, Odisha, India
          </p>

          <p className="konark-intro">
            The Konark Sun Temple is a magnificent 13th-century temple
            dedicated to Surya, the Sun God. It is famous for its giant
            stone chariot design, detailed carvings, and remarkable
            architectural brilliance.
          </p>

        </section>

        {/* Story */}

        <section className="monument-section">

          <h2>☀️ The Legend</h2>

          <p>
            Built around 1250 CE by King Narasimhadeva I of the Eastern
            Ganga Dynasty, the Konark Sun Temple was designed as a gigantic
            stone chariot carrying the Sun God across the sky. The temple
            features twelve beautifully carved wheels and seven stone
            horses, symbolizing the passage of time and the movement
            of the sun.
          </p>

        </section>

        {/* Facts */}

        <section className="monument-section">

          <h2>📋 Quick Facts</h2>

          <div className="facts-grid">

            <div className="fact-card card">
              <h3>📅 Built</h3>
              <p>13th Century (1250 CE)</p>
            </div>

            <div className="fact-card card">
              <h3>👑 Builder</h3>
              <p>King Narasimhadeva I</p>
            </div>

            <div className="fact-card card">
              <h3>☀️ Dedicated To</h3>
              <p>Surya (Sun God)</p>
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

            <img
              src={konark1}
              alt="Konark Temple Front"
            />

            <img
              src={konark2}
              alt="Konark Stone Wheel"
            />

            <img
              src={konark3}
              alt="Konark Temple Architecture"
            />

          </div>

        </section>

        {/* Fun Fact */}

        <section className="monument-section">

          <h2>💡 Did You Know?</h2>

          <p>
            The famous stone wheels of the Konark Sun Temple are so
            precisely carved that they can function as ancient sundials,
            allowing people to estimate the time using the shadow of
            the sun.
          </p>

        </section>

        {/* Visit */}

        <section className="monument-section">

          <h2>🧳 Plan Your Visit</h2>

          <div className="visit-grid">

            <div className="visit-card card">
              <h3>🕒 Timings</h3>
              <p>6:00 AM – 8:00 PM</p>
            </div>

            <div className="visit-card card">
              <h3>🎟 Entry</h3>
              <p>Tickets are available online and at the entrance.</p>
            </div>

            <div className="visit-card card">
              <h3>🌤 Best Season</h3>
              <p>October – February</p>
            </div>

          </div>

        </section>

        {/* Navigation */}

        <section className="monument-navigation">

          <Link to="/red-fort" className="nav-btn">
            ⬅ Red Fort
          </Link>

          <Link to="/hampi" className="nav-btn">
            Hampi ➡
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default KonarkPage;