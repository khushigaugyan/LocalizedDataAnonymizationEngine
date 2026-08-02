import { useState } from "react";
import "./Features.css";
import { ShieldCheck, Zap, ScanSearch, X } from "lucide-react";

function Features() {
    const [selectedFeature, setSelectedFeature] = useState(null);
    return (
        <section id="features" className="features">

            <div className="features-header">
                <h2>Why Choose CloakData?</h2>

                <p>
                    Powerful privacy protection designed for individuals,
                    businesses, and organizations.
                </p>
            </div>

            <div className="features-grid">

                <div
                    className="feature-card"
                    onClick={() => setSelectedFeature("detection")}
                >
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

                <div
                    className="feature-card"
                    onClick={() => setSelectedFeature("speed")}
                >
                    <div className="feature-icon">
                        <Zap size={42} />
                    </div>

                    <h3>Fast Processing</h3>

                    <p>
                        Upload your documents and receive an anonymized version
                        within seconds without compromising accuracy.
                    </p>
                </div>

                <div
                    className="feature-card"
                    onClick={() => setSelectedFeature("privacy")}
                >
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

            {selectedFeature && (
                <div
                    className="feature-modal-overlay"
                    onClick={() => setSelectedFeature(null)}
                >
                    <div
                        className="feature-modal"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            className="close-btn"
                            onClick={() => setSelectedFeature(null)}
                        >
                            <X size={22} />
                        </button>

                        {selectedFeature === "detection" && (
                            <>
                                <h2>Smart Data Detection</h2>

                                <ul>
                                    <li>✔ Email Addresses</li>
                                    <li>✔ Phone Numbers</li>
                                    <li>✔ Aadhaar Numbers</li>
                                    <li>✔ PAN Numbers</li>
                                    <li>✔ Passport Numbers</li>
                                    <li>✔ IFSC Codes</li>
                                    <li>✔ Bank Account Numbers</li>
                                    <li>✔ Credit & Debit Cards</li>
                                </ul>
                            </>
                        )}

                        {selectedFeature === "speed" && (
                            <>
                                <h2>Fast Processing</h2>

                                <ul>
                                    <li>TXT → Under 1 second</li>
                                    <li>CSV → Under 1 second</li>
                                    <li>DOCX → 1–2 seconds</li>
                                    <li>PDF → 2–4 seconds</li>
                                    <li>XLSX → 2–5 seconds</li>
                                </ul>
                            </>
                        )}

                        {selectedFeature === "privacy" && (
                            <>
                                <h2>Privacy First</h2>

                                <ul>
                                    <li>✔ Files processed securely</li>
                                    <li>✔ Sensitive data anonymized</li>
                                    <li>✔ Original file remains unchanged</li>
                                    <li>✔ No data retained after processing</li>
                                </ul>
                            </>
                        )}

                    </div>
                </div>
            )}

        </section>
    );
}

export default Features;