import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ExplorePage.css";
import { Link } from "react-router-dom";

function ExplorePage() {

  const journeys = [
    {
      title: "🏛 Heritage Hall",
      description:
        "Step inside the Heritage Hall and explore India's timeless monuments, rich history, and remarkable architecture.",
      button: "Enter Heritage Hall →",
      route: "/monuments",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="explore-page">

        <section className="explore-hero">

          <h1>🌍 Begin Your Journey</h1>

          <p>
            Welcome to the Heritage Preservation Portal.
            Discover India's architectural masterpieces,
            historical landmarks, and cultural treasures
            through an immersive virtual museum experience.
          </p>

        </section>

        <section className="journey-section">

          {journeys.map((journey, index) => (

            <article className="journey-card" key={index}>

              <div className="journey-content">

                <h2>{journey.title}</h2>

                <p>{journey.description}</p>

                <Link to={journey.route}>
                  {journey.button}
                </Link>

              </div>

            </article>

          ))}

        </section>

      </main>

      <Footer />
    </>
  );
}

export default ExplorePage;