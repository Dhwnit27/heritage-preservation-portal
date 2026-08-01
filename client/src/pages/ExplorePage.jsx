import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ExplorePage.css";
import { Link } from "react-router-dom";

function ExplorePage() {

const journeys = [
  {
    title: "🏛 Monument Gallery",
    description:
      "Explore humanity's greatest architectural wonders, from ancient temples to modern marvels.",
    button: "Enter Gallery →",
    route: "/monuments",
  },

  {
    title: "🎭 Culture Hall",
    description:
      "Discover festivals, music, clothing, food, and traditions from cultures around the world.",
    button: "Visit Hall →",
    route: "/culture",
  },

  {
    title: "📜 Tradition Archive",
    description:
      "Experience customs and rituals that have been passed down through generations.",
    button: "Continue Journey →",
    route: "/traditions",
  },

  {
    title: "📖 History Timeline",
    description:
      "Walk through the events and civilizations that shaped human history.",
    button: "Begin Timeline →",
    route: "/history",
  },
];

  return (
    <>
      <Navbar />

      <main className="explore-page">

  <section className="explore-hero">

    <h1>🌍 Choose Your Journey</h1>

    <p>
      Every monument has a story.
      Every culture has a voice.
      Where would you like to begin?
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