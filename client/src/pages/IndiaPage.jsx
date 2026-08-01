import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./IndiaPage.css";

import { Link } from "react-router-dom";

function IndiaPage() {
  return (
    <>
      <Navbar />

      <main className="india-page">

    <h1>🇮🇳 India</h1>

    <p>
        Choose a monument to begin exploring.
    </p>

    <section className="monument-grid">

        <Link to="/taj-mahal" className="monument-card">
    🏛 Taj Mahal
</Link>

        <div className="monument-card">
            🏛 Red Fort
        </div>

        <div className="monument-card">
            🏛 Konark Sun Temple
        </div>

        <div className="monument-card">
            🏛 Hampi
        </div>

    </section>

</main>

      <Footer />
    </>
  );
}

export default IndiaPage;