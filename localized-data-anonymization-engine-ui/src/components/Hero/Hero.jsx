import "./Hero.css";
import {
  ShieldCheck,
  Upload,
} from "lucide-react";

function Hero() {
  return (
    <section className="hero">

      {/* LEFT CONTENT */}

      <div className="hero-content">

        <div className="hero-tag">
          <ShieldCheck size={18} />
          AI Powered Privacy Protection
        </div>

        <h1>
          Protect Sensitive Data
          <br />
          Before You Share It.
        </h1>

        <p>
          CloakData automatically detects and anonymizes names,
          emails, phone numbers, Aadhaar, PAN and other sensitive
          information before your files are shared.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            <Upload size={18} />
            Upload File
          </button>

          <button className="secondary-btn">
            View Demo
          </button>

        </div>

        <div className="hero-stats">

          <div className="hero-stat">
            <h2>99.8%</h2>
            <span>Detection Accuracy</span>
          </div>

          <div className="hero-stat">
            <h2>10K+</h2>
            <span>Files Processed</span>
          </div>

          <div className="hero-stat">
            <h2>&lt;3s</h2>
            <span>Average Scan</span>
          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div className="hero-image">

        <div className="app-window">

          <div className="window-header">

            <div className="window-left">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>

            <span>CloakData Dashboard</span>

          </div>

          <div className="window-body">

            <div className="dashboard-card">

              <div className="file-row">

                <div>
                  <h4>employee_data.xlsx</h4>
                  <p>Last scanned • 2 min ago</p>
                </div>

                <span className="success-tag">
                  Protected
                </span>

              </div>

              <div className="progress-section">

                <div className="progress-top">
                  <span>Privacy Scan</span>
                  <span>99%</span>
                </div>

                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>

              </div>

              <div className="detect-title">
                Sensitive Information
              </div>

              <div className="detect-grid">

                <div className="detect-item">
                  <span>Name</span>
                  <span>Protected</span>
                </div>

                <div className="detect-item">
                  <span>Email</span>
                  <span>Protected</span>
                </div>

                <div className="detect-item">
                  <span>Phone</span>
                  <span>Protected</span>
                </div>

                <div className="detect-item">
                  <span>PAN</span>
                  <span>Protected</span>
                </div>

              </div>

              <div className="stats-grid">

                <div className="mini-card">
                  <h2>248</h2>
                  <p>Files</p>
                </div>

                <div className="mini-card">
                  <h2>18</h2>
                  <p>Protected</p>
                </div>

                <div className="mini-card">
                  <h2>99.8%</h2>
                  <p>Accuracy</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;