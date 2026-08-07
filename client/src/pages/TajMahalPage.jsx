import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import "../styles/MonumentPage.css";
import "./TajMahalPage.css";

import tajMahal from "../assets/images/TajMahal.jpg";
import tajMahal2 from "../assets/images/TajMahal-1.2.jpg";

function TajMahalPage() {
  return (
    <>
      <Navbar />

      <main className="page taj-page">

        <Link to="/india" className="back-btn">
          ← Back to India
        </Link>

        {/* Hero */}
        <section className="monument-hero">
          <h1 className="monument-title">🏛 Taj Mahal</h1>

          <img
            src={tajMahal}
            alt="Taj Mahal"
            className="monument-image"
          />

          <p className="monument-location">
            📍 Agra, Uttar Pradesh, India
          </p>

          <p className="taj-intro">
            One of the Seven Wonders of the World and one of the finest
            examples of Mughal architecture ever built. It was constructed
            by Emperor Shah Jahan as a symbol of eternal love.
          </p>
        </section>

        {/* Story */}
        <section className="monument-section">
          <h2>The Story</h2>

          <p>
            The Taj Mahal was commissioned by Mughal Emperor Shah Jahan
            in memory of his beloved wife Mumtaz Mahal. Construction
            began in 1632 and took over twenty years to complete.
            Today it is one of the world's most admired architectural
            masterpieces and a UNESCO World Heritage Site.
          </p>
        </section>

        {/* Facts */}
        <section className="monument-section">

          <h2>📋 Quick Facts</h2>

          <div className="facts-grid">

            <div className="fact-card card">
              <h3>📅 Built</h3>
              <p>1632–1653</p>
            </div>

            <div className="fact-card card">
              <h3>👑 Builder</h3>
              <p>Shah Jahan</p>
            </div>

            <div className="fact-card card">
              <h3>❤️ Dedicated To</h3>
              <p>Mumtaz Mahal</p>
            </div>

            <div className="fact-card card">
              <h3>🌍 UNESCO</h3>
              <p>World Heritage Site</p>
            </div>

          </div>

        </section>

        {/* Gallery */}

        <section className="monument-section">

          <h2>🖼 Photo Gallery</h2>

          <div className="gallery-grid">

            <img
              src={tajMahal}
              alt="Taj Mahal Main View"
            />

            <img
              src={tajMahal2}
              alt="Taj Mahal Entrance View"
            />

          </div>

        </section>

        {/* Fun Fact */}

        <section className="monument-section">

          <h2>💡 Did You Know?</h2>

          <p>
            The Taj Mahal appears to change color throughout the day.
            It looks pink during sunrise, brilliant white in daylight,
            golden at sunset, and silver under the moonlight.
          </p>

        </section>

        {/* Visit */}

        <section className="monument-section">

          <h2>🧳 Plan Your Visit</h2>

          <div className="visit-grid">

            <div className="visit-card card">
              <h3>🕒 Timings</h3>
              <p>6:00 AM – 6:30 PM</p>
            </div>

            <div className="visit-card card">
              <h3>🎟 Entry Ticket</h3>
              <p>Available online and at the official ticket counter.</p>
            </div>

            <div className="visit-card card">
              <h3>📍 Location</h3>
              <p>Agra, Uttar Pradesh, India</p>
            </div>

          </div>

        </section>

        {/* Navigation */}

        <section className="monument-navigation">

          <Link to="/india" className="nav-btn">
            ⬅ India Hall
          </Link>

          <Link to="/red-fort" className="nav-btn">
            Red Fort ➡
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default TajMahalPage;