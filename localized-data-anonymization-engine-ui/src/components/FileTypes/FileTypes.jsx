import "./FileTypes.css";
import { FileText, FileSpreadsheet, FileArchive, FileType, File } from "lucide-react";

function FileTypes() {
    return (
        <section className="file-types">

            <div className="file-types-header">
                <h2>Supported File Types</h2>

                <p>
                    CloakData securely anonymizes data from the most commonly
                    used document formats.
                </p>
            </div>

            <div className="file-types-grid">

                <div className="file-type-card">
                    <FileText size={42} />
                    <h3>PDF</h3>
                </div>

                <div className="file-type-card">
                    <FileSpreadsheet size={42} />
                    <h3>Excel</h3>
                </div>

                <div className="file-type-card">
                    <FileArchive size={42} />
                    <h3>CSV</h3>
                </div>

                <div className="file-type-card">
                    <FileType size={42} />
                    <h3>DOCX</h3>
                </div>

                <div className="file-type-card">
                    <File size={42} />
                    <h3>TXT</h3>
                </div>

            </div>

        </section>
    );
}

export default FileTypes;