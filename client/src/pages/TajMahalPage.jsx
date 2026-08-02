import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./TajMahalPage.css";

import tajMahal from "../assets/images/TajMahal.jpg";
// import tajMahal1 from "../assets/images/TajMahal-1.1.jpg";
import tajMahal2 from "../assets/images/TajMahal-1.2.jpg";

import { Link } from "react-router-dom";

function TajMahalPage() {
    return (
        <>
            <Navbar />

            <main className="taj-page page">

        <Link to="/india" className="back-btn">
    ← Back to India
</Link>

    <section className="taj-hero">

        <h1>🏛 Taj Mahal</h1>

        <img
            src={tajMahal}
            alt="Taj Mahal"
            className="taj-image"
        />



        <p className="taj-location">
            📍 Agra, Uttar Pradesh, India
        </p>

        <p className="taj-intro">
            One of the Seven Wonders of the World and one of the finest examples
            of Mughal architecture ever built.
        </p>

    </section>

    <section className="taj-gallery">

    <h2 className="section-title">Photo Gallery</h2>

   <div className="gallery-item">
    <img src={tajMahal} alt="Taj Mahal" />
    <p>Primeum View</p>
</div>

{/* <div className="gallery-item">
    <img src={tajMahal1} alt="Taj Mahal View" />
    <p>Front Architecture</p>
</div> */}

<div className="gallery-item">
    <img src={tajMahal2} alt="Taj Mahal Garden" />
    <p>Beautiful View From Main entrance</p>
</div>

</section>

<section className="visit-info">

    <h2>🧳 Plan Your Visit</h2>

    <div className="visit-grid">

        <div className="visit-card card">
            <h3>🕒 Timings</h3>
            <p>6:00 AM – 6:30 PM</p>
        </div>

        <div className="visit-card card">
            <h3>🎫 Entry Ticket</h3>
            <p>Available at the official ticket counter.</p>
        </div>

        <div className="visit-card card">
            <h3>📍 Location</h3>
            <p>Agra, Uttar Pradesh, India</p>
        </div>

    </div>

</section>

        <section className="taj-story">

    <h2>The Story</h2>

    <p>
        The Taj Mahal was built by the Mughal emperor Shah Jahan
        in memory of his beloved wife Mumtaz Mahal.
        Construction began in 1632 and took more than 20 years
        to complete.
    </p>

</section>

        <section className="taj-facts">

    <h2>Quick Facts</h2>

    <ul>

        <li>📅 Built: 1632–1653</li>

        <li>👑 Built By: Shah Jahan</li>

        <li>❤️ Dedicated To: Mumtaz Mahal</li>

        <li>🌍 UNESCO World Heritage Site</li>

    </ul>

</section>

<section className="taj-funfact">

    <h2>💡 Did You Know?</h2>

    <div className="fact-box">

        <p>
            The Taj Mahal changes its color throughout the day.
            It appears pink in the morning, dazzling white during the day,
            golden at sunset, and silver under the moonlight.
        </p>

    </div>

</section>

</main>

            <Footer />
        </>
    );
}

export default TajMahalPage;