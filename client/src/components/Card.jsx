import { Link } from "react-router-dom";

function Card({ to, className = "", children }) {
  return (
    <Link to={to} className={`card ${className}`}>
      {children}
    </Link>
  );
}

export default Card;