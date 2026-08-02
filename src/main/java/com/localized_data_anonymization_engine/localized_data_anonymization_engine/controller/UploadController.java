package com.localized_data_anonymization_engine.localized_data_anonymization_engine.controller;

import com.localized_data_anonymization_engine.localized_data_anonymization_engine.service.AnonymizationResult;
import com.localized_data_anonymization_engine.localized_data_anonymization_engine.service.FileProcessingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api")
@CrossOrigin(
        origins = {
                "http://localhost:5173",
                "https://localized-data-anonymization-engine-khushigaugyan1.vercel.app",
                "https://localized-data-anonymization-engine-git-main-khushigaugyan1.vercel.app"
        },
        exposedHeaders = "Content-Disposition"
)
public class UploadController {

    @Autowired
    private FileProcessingService fileProcessingService;

    @PostMapping("/upload")
    public ResponseEntity<byte[]> uploadFile(
            @RequestParam("file") MultipartFile file) {

        return fileProcessingService.processUpload(file);
    }

    @PostMapping("/analyze")
    public ResponseEntity<AnonymizationResult> analyzeFile(
            @RequestParam("file") MultipartFile file) {

        return fileProcessingService.processAnalysis(file);
    }
}