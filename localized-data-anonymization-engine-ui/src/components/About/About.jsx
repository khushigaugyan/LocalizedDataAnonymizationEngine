import "./About.css";
import {
  ShieldCheck,
  FileText,
  Lock,
  Cpu,
} from "lucide-react";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-left">

        <span className="about-tag">
          About CloakData
        </span>

        <h2>
          Protect Documents Before
          <br />
          You Share Them
        </h2>

        <p>
          CloakData is an AI-powered document anonymization platform that
          automatically detects and masks sensitive information from TXT,
          PDF, DOCX, XLSX and CSV files while preserving document readability.
          It helps users securely share resumes, reports, spreadsheets and
          other documents without exposing personal information.
        </p>

        <div className="about-features">

          <div>
            <ShieldCheck size={20}/>
            <span>Privacy First</span>
          </div>

          <div>
            <FileText size={20}/>
            <span>5 File Formats</span>
          </div>

          <div>
            <Lock size={20}/>
            <span>Secure Processing</span>
          </div>

          <div>
            <Cpu size={20}/>
            <span>Fast Detection</span>
          </div>

        </div>

      </div>

      <div className="about-right">

          <h3>Why CloakData?</h3>

          <div className="why-card">
              <h4>🔒 Privacy Focused</h4>
              <p>
                  Automatically detects and anonymizes sensitive personal
                  information before documents are shared.
              </p>
          </div>

          <div className="why-card">
              <h4>📄 Multi-Format Support</h4>
              <p>
                  Process TXT, PDF, DOCX, XLSX and CSV files using one
                  simple interface.
              </p>
          </div>

          <div className="why-card">
              <h4>⚡ Fast & Simple</h4>
              <p>
                  Upload, analyze and download an anonymized document
                  within seconds.
              </p>
          </div>

      </div>

    </section>
  );
}

export default About;