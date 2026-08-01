package com.localized_data_anonymization_engine.localized_data_anonymization_engine.service;

import com.localized_data_anonymization_engine.localized_data_anonymization_engine.util.*;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileProcessingService {

    private final AnonymizationService anonymizationService;

    public FileProcessingService(AnonymizationService anonymizationService) {
        this.anonymizationService = anonymizationService;
    }

    private String extractContent(MultipartFile file) throws Exception {

        String fileName = file.getOriginalFilename().toLowerCase();

        if (fileName.endsWith(".pdf")) {

            return PdfUtil.extractText(file);

        } else if (fileName.endsWith(".docx")) {

            return DocxUtil.extractText(file);

        } else if (fileName.endsWith(".xlsx")) {

            return ExcelUtil.extractText(file);

        } else if (fileName.endsWith(".csv")) {

            return CsvUtil.extractText(file);

        } else {

            return new String(file.getBytes());

        }
    }

    public ResponseEntity<byte[]> processUpload(MultipartFile file) {

        try {

            String content = extractContent(file);

            AnonymizationResult result = anonymizationService.anonymize(content);

            String anonymized = result.getAnonymizedContent();

            String originalFileName = file.getOriginalFilename().toLowerCase();

            System.out.println("Original File Name = " + originalFileName);

            byte[] outputBytes;
            String downloadName;

            if (originalFileName.endsWith(".pdf")) {

                outputBytes = PdfGeneratorUtil.generatePdf(anonymized);
                downloadName = "anonymized.pdf";

            } else if (originalFileName.endsWith(".docx")) {

                outputBytes = DocxGeneratorUtil.anonymizeDocx(
                        file,
                        anonymizationService
                );

                downloadName = "anonymized.docx";

            } else if (originalFileName.endsWith(".xlsx")) {

                outputBytes = ExcelGeneratorUtil.anonymizeExcel(
                        file,
                        anonymizationService
                );

                downloadName = "anonymized.xlsx";

            } else if (originalFileName.endsWith(".csv")) {

                outputBytes = CsvGeneratorUtil.anonymizeCsv(
                        file,
                        anonymizationService
                );

                downloadName = "anonymized.csv";

            } else {

                outputBytes = anonymized.getBytes();
                downloadName = "anonymized.txt";

            }

            System.out.println("Download Name = " + downloadName);

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION,
                            "attachment; filename=\"" + downloadName + "\"")
                    .contentType(MediaType.APPLICATION_OCTET_STREAM)
                    .body(outputBytes);

        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity.badRequest()
                    .body(e.getMessage().getBytes());

        }
    }

    public ResponseEntity<AnonymizationResult> processAnalysis(MultipartFile file) {

        try {

            String content = extractContent(file);

            AnonymizationResult result = anonymizationService.anonymize(content);

            return ResponseEntity.ok(result);

        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity.badRequest().build();

        }
    }
}