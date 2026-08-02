# 🛡️ CloakData

> AI-powered document anonymization platform that detects and masks sensitive information before documents are shared.

![Java](https://img.shields.io/badge/Java-21-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-green)
![React](https://img.shields.io/badge/React-19-61DAFB)
![Vite](https://img.shields.io/badge/Vite-Frontend-purple)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 🌐 Live Demo

**Frontend**

https://localized-data-anonymization-engine.vercel.app

**Backend API**

https://localizeddataanonymizationengine-production.up.railway.app

---

# 📖 Overview

CloakData is an AI-powered document anonymization platform that helps users protect sensitive information before sharing files.

The application automatically detects and masks personally identifiable information (PII) while preserving the structure of the original document.

Supported document types include TXT, PDF, DOCX, XLSX, and CSV.

---

# ✨ Features

- 🔒 Detects sensitive personal information
- 📄 Supports PDF documents
- 📝 Supports DOCX documents
- 📊 Supports XLSX spreadsheets
- 📑 Supports CSV files
- 📃 Supports TXT files
- 📥 Download anonymized documents
- 📈 Detection summary dashboard
- 🌐 Responsive modern UI
- ☁️ Cloud deployment using Railway & Vercel

---

# 🧠 Sensitive Data Detection

CloakData currently detects:

- Email Addresses
- Phone Numbers
- Aadhaar Numbers
- PAN Numbers
- Passport Numbers
- Credit/Debit Card Numbers
- IFSC Codes
- Bank Account Numbers

---

# 🛠️ Tech Stack

### Frontend

- React
- Vite
- CSS
- Lucide Icons

### Backend

- Java 21
- Spring Boot
- REST APIs

### Libraries

- Apache PDFBox
- Apache POI

### Deployment

- Railway
- Vercel

---

# 📂 Project Structure

```
LocalizedDataAnonymizationEngine
│
├── src/                     # Spring Boot Backend
│
├── localized-data-anonymization-engine-ui/
│      ├── src/
│      ├── public/
│      └── package.json
│
└── README.md
```

---

# 🚀 Installation

## Backend

```bash
git clone https://github.com/khushigaugyan/LocalizedDataAnonymizationEngine.git

cd LocalizedDataAnonymizationEngine

./mvnw spring-boot:run
```

---

## Frontend

```bash
cd localized-data-anonymization-engine-ui

npm install

npm run dev
```

---

# 📄 Supported File Types

| File Type | Supported |
|-----------|-----------|
| TXT | ✅ |
| PDF | ✅ |
| DOCX | ✅ |
| XLSX | ✅ |
| CSV | ✅ |

---

# # 📌 Project Highlights

- AI-powered document anonymization
- Multi-format file support (TXT, PDF, DOCX, XLSX, CSV)
- Automatic sensitive data detection
- Download anonymized documents
- Detection summary dashboard
- Responsive React frontend
- Spring Boot REST API backend
- Live deployment using Vercel and Railway
---

# 🔮 Future Improvements

- Drag & Drop Upload
- Batch File Processing
- AI-based Entity Recognition
- User Authentication
- Audit Logs
- Multi-language Support
- Custom Detection Rules

---

# 👩‍💻 Author

**Khushi Saini**

GitHub

https://github.com/khushigaugyan

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.
