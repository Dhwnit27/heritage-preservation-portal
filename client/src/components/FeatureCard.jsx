import {useState} from "react";

function FeatureCard(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="feature-card">
      <img src={props.image} alt={props.title} />

      <h3>{props.title}</h3>

      <p>{props.description}</p>

      <button
  onClick={() => setIsFavorite(!isFavorite)}
>
  {isFavorite ? "❤️ Favorited" : "🤍 Add to Favorites"}
</button>
    </div>
  );
}

export default FeatureCard;