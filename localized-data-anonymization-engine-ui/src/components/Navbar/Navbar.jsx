import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-brand">
        <img
          src={logo}
          alt="CloakData Logo"
          className="logo"
        />

        <h2>CloakData</h2>
      </div>

      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#github">GitHub</a></li>
      </ul>

      <button className="upload-btn">
        Upload File
      </button>

    </nav>
  );
}

export default Navbar;