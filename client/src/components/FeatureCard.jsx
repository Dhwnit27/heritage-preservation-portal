function FeatureCard(props) {
  return (
    <div className="feature-card">
      <img src={props.image} alt={props.title} />

      <h3>{props.title}</h3>

      <p>{props.description}</p>

      <button>Explore</button>
    </div>
  );
}

export default FeatureCard;