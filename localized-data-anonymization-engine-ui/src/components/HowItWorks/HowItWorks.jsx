import "./HowItWorks.css";
import { Upload, ScanSearch, Download } from "lucide-react";

function HowItWorks() {
    return (
        <section id="how-it-works" className="how-it-works">

            <div className="how-header">
                <h2>How CloakData Works</h2>

                <p>
                    Anonymize sensitive information in just three simple steps.
                </p>
            </div>

            <div className="how-grid">

                <div className="how-card">
                    <div className="how-icon">
                        <Upload size={42} />
                    </div>

                    <h3>1. Upload File</h3>

                    <p>
                        Upload PDF, Excel, CSV, or text documents securely
                        through the CloakData platform.
                    </p>
                </div>

                <div className="how-card">
                    <div className="how-icon">
                        <ScanSearch size={42} />
                    </div>

                    <h3>2. AI Detects Data</h3>

                    <p>
                        CloakData scans your document and automatically
                        identifies sensitive information such as names,
                        emails, phone numbers, Aadhaar, and PAN.
                    </p>
                </div>

                <div className="how-card">
                    <div className="how-icon">
                        <Download size={42} />
                    </div>

                    <h3>3. Download Safe File</h3>

                    <p>
                        Download the anonymized document instantly,
                        ready to share while keeping private information
                        protected.
                    </p>
                </div>

            </div>

        </section>
    );
}

export default HowItWorks;