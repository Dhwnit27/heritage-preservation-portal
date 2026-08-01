import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AsiaPage.css";

import { Link } from "react-router-dom";

function AsiaPage() {
  return (
    <>
      <Navbar />

     <main className="asia-page">

    <h1>🌏 Asia</h1>

    <p>
        Choose a country to continue your journey.
    </p>

    <section className="country-grid">

       <Link to="/india" className="country-card">
    🇮🇳 India
</Link>

        <div className="country-card">
            🇨🇳 China
        </div>

        <div className="country-card">
            🇯🇵 Japan
        </div>

        <div className="country-card">
            🇰🇭 Cambodia
        </div>

    </section>

</main>

      <Footer />
    </>
  );
}

export default AsiaPage;