import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Card from "../components/Card";

import "./IndiaPage.css";

function IndiaPage() {
  return (
    <>
      <Navbar />

      <main className="india-page page">
        <h1>🇮🇳 India Hall</h1>

        <p className="india-subtitle">
          Explore India's magnificent UNESCO World Heritage Sites and timeless
          architectural masterpieces. Step into each exhibition room to discover
          the history, culture, and stories behind these iconic monuments.
        </p>

        <section className="monument-grid">
          <Card to="/taj-mahal" className="monument-card">
            <h2>🏛 Taj Mahal</h2>

            <p>✨ Eternal Symbol of Love</p>

             <span className="open-room">
        Open Exhibit →
    </span>

          </Card>

          <Card to="/red-fort" className="monument-card">
            <h2>🏰 Red Fort</h2>

            <p>👑 Mughal Royal Residence</p>
          
           <span className="open-room">
        Open Exhibit →
    </span>

          </Card>

          <Card to="/konark" className="monument-card">
            <h2>☀️ Konark Sun Temple</h2>

            <p>🌞 Chariot of the Sun God</p>
            <span className="open-room">
              Open Exhibit →
            </span>
          </Card>

          <Card to="/hampi" className="monument-card">
            <h2>🪨 Hampi</h2>

            <p>🏺 Lost City of Vijayanagara</p>
            <span className="open-room">
              Open Exhibit →
            </span>
          </Card>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default IndiaPage;
