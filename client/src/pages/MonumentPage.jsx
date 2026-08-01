import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./MonumentPage.css";

function MonumentPage() {
  return (
    <>
      <Navbar />

      <main className="monument-page">

    <h1>🏛 Monument Gallery</h1>

    <p>
        Choose a continent to begin exploring its famous monuments.
    </p>

    <section className="continent-grid">

       <Link to="/asia" className="continent-card">

    <h2>🌏 Asia</h2>

</Link>

        <div className="continent-card">
            <h2>🌍 Europe</h2>
        </div>

        <div className="continent-card">
            <h2>🌎 America</h2>
        </div>

        <div className="continent-card">
            <h2>🌍 Africa</h2>
        </div>

    </section>

</main>
      <Footer />
    </>
  );
}

export default MonumentPage;