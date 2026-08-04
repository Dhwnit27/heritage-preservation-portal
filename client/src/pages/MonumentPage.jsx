import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { Link } from "react-router-dom";

import "./MonumentPage.css";

function MonumentPage() {
    return (
        <>
            <Navbar />

            <main className="monument-page page">

                <section className="monument-hero">

<h1>🏛 Monument Gallery</h1>

<p>
    Step into India's rich architectural heritage and explore
    iconic monuments through beautifully curated exhibition
    rooms. Each monument preserves a unique story, remarkable
    craftsmanship, and a timeless legacy waiting to be discovered.
</p>

                </section>

                <section className="country-grid">

                    <Card
                        to="/india"
                        className="country-card"
                    >

                        <h2>🇮🇳 India</h2>

                        <p>
                            Explore UNESCO World Heritage Sites,
                            magnificent forts, temples and timeless
                            monuments.
                        </p>

                        <span className="open-room">
                            Enter India Hall →
                        </span>

                    </Card>

                </section>

            </main>

            <Footer />
        </>
    );
}

export default MonumentPage;