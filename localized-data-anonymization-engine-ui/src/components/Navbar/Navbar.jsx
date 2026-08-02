import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar({ onUploadClick }) {
  return (
    <nav className="navbar">

     <a href="#home" className="navbar-brand">
        <img
          src={logo}
          alt="CloakData Logo"
          className="logo"
        />

        <h2>CloakData</h2>
      </a>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#supported-files">Supported Files</a></li>
        <li><a href="#about">About</a></li>

        <li>
            <a
                href="https://github.com/khushigaugyan/LocalizedDataAnonymizationEngine"
                target="_blank"
                rel="noreferrer"
            >
                GitHub
            </a>
        </li>
      </ul>

      <button
          className="upload-btn"
          onClick={onUploadClick}
      >
          Upload
      </button>
    </nav>
  );
}

export default Navbar;