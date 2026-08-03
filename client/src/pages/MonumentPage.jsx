import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./MonumentPage.css";

function MonumentPage() {
  return (
    <>
      <Navbar />

      <main className="monument-page page">

    <h1>🏛 Monument Gallery</h1>

    <p>
        Choose a continent to begin exploring its famous monuments.
    </p>

    <section className="continent-grid">

    <Link to="/asia" className="continent-card card">
    <h2>🌏 Asia</h2>

    </Link>

    <Link to="/europe" className="continent-card card">
        <h2>🌏 Europe</h2>
    </Link>
 
    <Link to="/north-america" className="continent-card card">
        <h2>🌎 North America</h2>
     </Link>

    <Link to="/south-america" className="continent-card card">
        <h2>🌎 South America</h2>
    </Link>


    </section>

</main>
      <Footer />
    </>
  );
}

export default MonumentPage;