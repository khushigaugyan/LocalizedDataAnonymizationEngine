import "./FileTypes.css";
import { FileText, FileSpreadsheet, FileArchive, FileType, File } from "lucide-react";

function FileTypes({ onFileTypeClick }) {
    return (
        <section id="supported-files" className="file-types">

            <div className="file-types-header">
                <h2>Supported File Types</h2>

                <p>
                    CloakData securely anonymizes data from the most commonly
                    used document formats.
                </p>
            </div>

            <div className="file-types-grid">

                <div
                    className="file-type-card"
                    onClick={() => onFileTypeClick(".pdf")}
                >
                    <FileText size={42} />
                    <h3>PDF</h3>
                </div>

                <div
                    className="file-type-card"
                    onClick={() => onFileTypeClick(".xlsx")}
                >
                    <FileSpreadsheet size={42} />
                    <h3>Excel</h3>
                </div>

                <div
                    className="file-type-card"
                    onClick={() => onFileTypeClick(".csv")}
                >
                    <FileArchive size={42} />
                    <h3>CSV</h3>
                </div>

                <div
                    className="file-type-card"
                    onClick={() => onFileTypeClick(".docx")}
                >
                    <FileType size={42} />
                    <h3>DOCX</h3>
                </div>

                <div
                    className="file-type-card"
                    onClick={() => onFileTypeClick(".txt")}
                >
                    <File size={42} />
                    <h3>TXT</h3>
                </div>

            </div>

        </section>
    );
}

export default FileTypes;