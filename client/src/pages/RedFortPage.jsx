import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import "../styles/MonumentPage.css";
import "./RedFortPage.css";

import redFort1 from "../assets/images/Red-Fort-1.jpg";
import redFort2 from "../assets/images/Red-Fort-2.jpg";
import redFort3 from "../assets/images/Red-Fort-3.jpg";

function RedFortPage() {
  return (
    <>
      <Navbar />

      <main className="page redfort-page">

        <Link to="/india" className="back-btn">
          ← Back to India
        </Link>

        {/* Hero Section */}
        <section className="monument-hero">

          <h1 className="monument-title">
            🏰 Red Fort
          </h1>

          <img
            src={redFort1}
            alt="Red Fort"
            className="monument-image"
          />

          <p className="monument-location">
            📍 Delhi, India
          </p>

          <p className="redfort-intro">
            The Red Fort is one of India's most iconic historical landmarks,
            built by Mughal Emperor Shah Jahan and recognized as a UNESCO
            World Heritage Site.
          </p>

        </section>

        {/* Story */}
        <section className="monument-section">

          <h2>The Story</h2>

          <p>
            The Red Fort was commissioned by Mughal Emperor Shah Jahan in
            1638 after shifting the Mughal capital from Agra to Delhi.
            Constructed using magnificent red sandstone, it served as the
            residence of Mughal emperors for nearly 200 years and remains one
            of India's greatest symbols of history and architecture.
          </p>

        </section>

        {/* Quick Facts */}
        <section className="monument-section">

          <h2>📋 Quick Facts</h2>

          <div className="facts-grid">

            <div className="fact-card card">
              <h3>📅 Built</h3>
              <p>1638–1648</p>
            </div>

            <div className="fact-card card">
              <h3>👑 Builder</h3>
              <p>Shah Jahan</p>
            </div>

            <div className="fact-card card">
              <h3>📍 Location</h3>
              <p>Delhi, India</p>
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
              src={redFort1}
              alt="Red Fort Main View"
            />

            <img
              src={redFort2}
              alt="Red Fort Interior"
            />

            <img
              src={redFort3}
              alt="Red Fort Architecture"
            />

          </div>

        </section>

        {/* Fun Fact */}
        <section className="monument-section">

          <h2>💡 Did You Know?</h2>

          <p>
            Every year on India's Independence Day (15 August), the Prime
            Minister hoists the national flag at the Red Fort and addresses
            the nation from its historic ramparts.
          </p>

        </section>

        {/* Visit */}
        <section className="monument-section">

          <h2>🧳 Plan Your Visit</h2>

          <div className="visit-grid">

            <div className="visit-card card">
              <h3>🕒 Timings</h3>
              <p>9:30 AM – 4:30 PM</p>
            </div>

            <div className="visit-card card">
              <h3>🎟 Entry</h3>
              <p>Tickets available online and at the entrance.</p>
            </div>

            <div className="visit-card card">
              <h3>📍 Best Season</h3>
              <p>October – March</p>
            </div>

          </div>

        </section>

        {/* Navigation */}
        <section className="monument-navigation">

          <Link to="/taj-mahal" className="nav-btn">
            ⬅ Taj Mahal
          </Link>

          <Link to="/Konark" className="nav-btn">
            Konark ➡
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default RedFortPage;