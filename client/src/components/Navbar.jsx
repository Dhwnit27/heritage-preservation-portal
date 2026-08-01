import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <h2>🏛️ Heritage Preservation Portal</h2>
      <ul>
  <li><Link to="/">Home</Link></li>
<li><Link to="/explore">Explore</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/contact">Contact</Link></li>
</ul>
    </nav>
  );
}

export default Navbar;