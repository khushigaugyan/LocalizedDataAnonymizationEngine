import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import "./Hero.css";
import {
  ShieldCheck,
  Upload,
} from "lucide-react";

const Hero = forwardRef((props, ref) => {
    const fileInputRef = useRef(null);
    useImperativeHandle(ref, () => ({

        openFilePicker(type = "") {

            setAcceptedType(type);

            fileInputRef.current.value = "";

            fileInputRef.current.click();

        }

    }));

        const [summary, setSummary] = useState(null);
        const [uploadedFile, setUploadedFile] = useState("");

        const [loading, setLoading] = useState(false);
        const [showDemo, setShowDemo] = useState(false);
        const [acceptedType, setAcceptedType] = useState("");
        const [dragActive, setDragActive] = useState(false);

        const openPicker = (type = "") => {

            setAcceptedType(type);

            fileInputRef.current.value = "";

            fileInputRef.current.click();

        };

      const uploadFile = async (file) => {

          if (!file) return;


              if (!file) return;

              setUploadedFile(file.name);

          if (!file) return;

          const formData = new FormData();
          formData.append("file", file);

          try {
              setLoading(true);
              // Analyze File
              const analyzeResponse = await fetch("http://localhost:8080/api/analyze", {
                  method: "POST",
                  body: formData,
              });

              if (!analyzeResponse.ok) {
                  throw new Error("Analysis failed");
              }

              const analysis = await analyzeResponse.json();

              setSummary(analysis);

              // Download Anonymized File
              const uploadResponse = await fetch("http://localhost:8080/api/upload", {
                  method: "POST",
                  body: formData,
              });

              if (!uploadResponse.ok) {
                  throw new Error("Upload failed");
              }

              const blob = await uploadResponse.blob();

              const url = window.URL.createObjectURL(blob);

              const a = document.createElement("a");
              a.href = url;

              const disposition = uploadResponse.headers.get("Content-Disposition");
              console.log("Content-Disposition:", disposition);

              let fileName = "anonymized.txt";

              if (disposition && disposition.includes("filename=")) {
                  fileName = disposition
                      .split("filename=")[1]
                      .replace(/"/g, "");
              }

              a.download = fileName;

              document.body.appendChild(a);
              a.click();
              a.remove();

              window.URL.revokeObjectURL(url);

          } catch (error) {

              console.error(error);
              alert(error.message);

          } finally {
                setLoading(false);
            }
      };
  return (
    <section className="hero">

        {showDemo && (
            <div
                className="demo-overlay"
                onClick={() => setShowDemo(false)}
            >
                <div
                    className="demo-modal"
                    onClick={(e) => e.stopPropagation()}
                >

                    <h2>How CloakData Works</h2>

                    <p><strong>Original</strong></p>

                    <pre>
        Email: john@gmail.com
        Phone: 9876543210
        PAN: ABCDE1234F
                    </pre>

                    <p><strong>Anonymized</strong></p>

                    <pre>
        Email: [EMAIL]
        Phone: [PHONE]
        PAN: [PAN]
                    </pre>

                    <button
                        className="primary-btn"
                        onClick={() => setShowDemo(false)}
                    >
                        Close
                    </button>

                </div>
            </div>
        )}
      {/* LEFT CONTENT */}

      <input
        type="file"
        accept={acceptedType}
        ref={fileInputRef}
        style={{ display: "none" }}
        onClick={() => console.log("Input clicked")}
        onChange={(e) => uploadFile(e.target.files[0])}
      />

      <div
          className={`hero-content ${dragActive ? "drag-active" : ""}`}
          onDragEnter={(e) => {
              e.preventDefault();
              console.log("ENTER");
              setDragActive(true);
          }}

          onDragOver={(e) => {
              e.preventDefault();
              console.log("OVER");
              setDragActive(true);
          }}

          onDragLeave={(e) => {
              e.preventDefault();
              console.log("LEAVE");
              setDragActive(false);
          }}

          onDrop={(e) => {
              e.preventDefault();
              console.log("DROP");

              setDragActive(false);

              const file = e.dataTransfer.files[0];

              uploadFile(file);
          }}
      >

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

          <button
            className="primary-btn"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload size={18} />
            Upload File
          </button>

          <button
              className="secondary-btn"
              onClick={() => setShowDemo(true)}
          >
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
                  <h4>{uploadedFile || "employee_data.xlsx"}</h4>

                 <p>
                     {summary
                         ? "Successfully Anonymized"
                         : "Ready to Scan"}
                 </p>
                </div>

                <span className="success-tag">
                  Protected
                </span>

              </div>

              {summary && (
              <div className="progress-section">

                <div className="progress-top">
                  <span>
                      {summary ? "Privacy Scan Completed" : "Privacy Scan"}
                  </span>
                  <span>{summary ? "100%" : "99%"}</span>
                </div>

                <div className="progress-bar">
                  <div
                      className="progress-fill"
                      style={{
                          width: summary ? "100%" : "99%"
                      }}
                  ></div>

                </div>


              </div>
              )}

              <div className="detect-title">
                  {summary ? "Scan Results" : "Sensitive Information"}
              </div>

              <div className="detect-grid">

                  {!summary ? (

                      <>
                          <div className="detect-item">
                              <span>Email</span>
                              <span>Waiting</span>
                          </div>

                          <div className="detect-item">
                              <span>Phone</span>
                              <span>Waiting</span>
                          </div>

                          <div className="detect-item">
                              <span>PAN</span>
                              <span>Waiting</span>
                          </div>

                          <div className="detect-item">
                              <span>Aadhaar</span>
                              <span>Waiting</span>
                          </div>
                      </>

                  ) : (

                      <>
                          <div className="detect-item">
                              <span>Emails Found</span>
                              <span>{summary.emailCount}</span>
                          </div>

                          <div className="detect-item">
                              <span>Phones Found</span>
                              <span>{summary.phoneCount}</span>
                          </div>

                          <div className="detect-item">
                              <span>PAN Found</span>
                              <span>{summary.panCount}</span>
                          </div>

                          <div className="detect-item">
                              <span>Aadhaar Found</span>
                              <span>{summary.aadhaarCount}</span>
                          </div>

                          <div className="detect-item">
                              <span>Passport Found</span>
                              <span>{summary.passportCount}</span>
                          </div>

                          <div className="detect-item">
                              <span>Cards Found</span>
                              <span>{summary.cardCount}</span>
                          </div>

                          <div className="detect-item">
                              <span>IFSC Found</span>
                              <span>{summary.ifscCount}</span>
                          </div>

                          <div className="detect-item">
                              <span>Accounts Found</span>
                              <span>{summary.accountCount}</span>
                          </div>
                      </>

                  )}

              </div>

              <div className="stats-grid">

                <div className="mini-card">
                    <h2>{summary ? 1 : 248}</h2>
                    <p>Files Scanned</p>
                </div>

                <div className="mini-card">
                    <h2>
                        {summary
                            ? summary.emailCount +
                              summary.phoneCount +
                              summary.panCount +
                              summary.aadhaarCount +
                              summary.passportCount +
                              summary.cardCount +
                              summary.ifscCount +
                              summary.accountCount
                            : 18}
                    </h2>
                    <p>Protected</p>
                </div>

                <div className="mini-card">
                    <h2>{summary ? "100%" : "99.8%"}</h2>
                    <p>Scan Complete</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
});

export default Hero;