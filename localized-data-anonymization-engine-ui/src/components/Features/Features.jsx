import "./Features.css";
import { ShieldCheck, Zap, ScanSearch } from "lucide-react";

function Features() {
    return (
        <section className="features">

            <div className="features-header">
                <h2>Why Choose CloakData?</h2>

                <p>
                    Powerful privacy protection designed for individuals,
                    businesses, and organizations.
                </p>
            </div>

            <div className="features-grid">

                <div className="feature-card">
                    <div className="feature-icon">
                        <ShieldCheck size={42} />
                    </div>

                    <h3>Smart Data Detection</h3>

                    <p>
                        Automatically identifies names, emails, phone numbers,
                        Aadhaar numbers, PAN numbers, and other sensitive
                        information.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">
                        <Zap size={42} />
                    </div>

                    <h3>Fast Processing</h3>

                    <p>
                        Upload your documents and receive an anonymized version
                        within seconds without compromising accuracy.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">
                        <ScanSearch size={42} />
                    </div>

                    <h3>Privacy First</h3>

                    <p>
                        Your files are processed securely, ensuring confidential
                        information remains protected before sharing.
                    </p>
                </div>

            </div>

        </section>
    );
}

export default Features;