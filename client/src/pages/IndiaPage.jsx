import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import "./IndiaPage.css";

function IndiaPage() {
  return (
    <>
      <Navbar />

      <main className="india-page page">

        <h1>🇮🇳 India</h1>

        <p className="india-subtitle">
          Choose a monument to begin exploring.
        </p>

        <section className="monument-grid">

          <Link to="/taj-mahal" className="monument-card card">
            🏛 Taj Mahal
          </Link>

          <Link to="/red-fort" className="monument-card card">
            🏰 Red Fort
          </Link>

          <Link to="/konark" className="monument-card card">
    ☀️ Konark Sun Temple
            </Link>

         <Link to="/hampi" className="monument-card card">
  🪨 Hampi
</Link>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default IndiaPage;