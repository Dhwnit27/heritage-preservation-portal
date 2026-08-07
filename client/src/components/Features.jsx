import "./Features.css";

import { useState } from "react";

import monumentImage from "../assets/images/monuments.jpg";
import cultureImage from "../assets/images/culture.jpg";
import traditionsImage from "../assets/images/traditions.jpg";
import historyImage from "../assets/images/history.jpg";

import FeatureCard from "./FeatureCard";

function Features() {
  const [searchTerm, setSearchTerm] = useState("");

  const features = [
    {
      image: monumentImage,
      title: "🏛️ Monuments",
      description: "Discover famous historical monuments around the world.",
    },
    {
      image: cultureImage,
      title: "🎭 Culture",
      description: "Explore traditions, festivals, and cultural heritage.",
    },
    {
      image: traditionsImage,
      title: "📜 Traditions",
      description: "Learn about customs passed down through generations.",
    },
    {
      image: historyImage,
      title: "📖 History",
      description: "Understand important historical events and stories.",
    },
  ];

  const filteredFeatures = features.filter((feature) =>
    feature.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="features" className="features">
      <h2>Our Heritage Features</h2>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="features-container">
        {filteredFeatures.map((feature, index) => (
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