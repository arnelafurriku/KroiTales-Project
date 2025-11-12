import { useNavigate } from "react-router";

export default function NavBar() {
  const navigate = useNavigate();
  const go = (e, to) => { e.preventDefault(); navigate(to); };

  return (
    <header>
      <nav className="navbar" aria-label="Primary">
        <a href="#" className="navbar__brand" onClick={(e) => go(e, "/")}>KroiTales</a>
        <ul className="navbar__links">
          <li><a href="#" className="navbar__link" onClick={(e) => go(e, "/")}>Home</a></li>
          <li><a href="#" className="navbar__link" onClick={(e) => go(e, "/about")}>About</a></li> {/* ← restored */}
        </ul>
      </nav>
    </header>
  );
}
