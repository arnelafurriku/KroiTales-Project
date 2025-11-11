import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <nav aria-label="Primary">
        <h1><Link to="/">KroiTales</Link></h1>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
export default NavBar;