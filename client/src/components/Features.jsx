import "./Features.css";

import monumentImage from "../assets/images/monuments.jpg";
import cultureImage from "../assets/images/culture.jpg";
import traditionsImage from "../assets/images/traditions.jpg";
import historyImage from "../assets/images/history.jpg";

import FeatureCard from "./FeatureCard";

function Features() {
  const features = [
    {
      image: monumentImage,
      title: "🏛️ Monuments",
      description: "Discover famous historical monuments around the world."
    },
    {
      image: cultureImage,
      title: "🎭 Culture",
      description: "Explore traditions, festivals, and cultural heritage."
    },
    {
      image: traditionsImage,
      title: "📜 Traditions",
      description: "Learn about customs passed down through generations."
    },
    {
      image: historyImage,
      title: "📖 History",
      description: "Understand important historical events and stories."
    }
  ];

  return (
    <section id="features" className="features">
      <h2>Our Heritage Features</h2>

      <div className="features-container">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;