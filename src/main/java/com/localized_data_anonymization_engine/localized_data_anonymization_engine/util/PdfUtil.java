package com.localized_data_anonymization_engine.localized_data_anonymization_engine.util;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public class PdfUtil {

    public static String extractText(MultipartFile file) throws IOException {

        PDDocument document = PDDocument.load(file.getBytes());

        PDFTextStripper pdfStripper = new PDFTextStripper();

        String text = pdfStripper.getText(document);

        document.close();

        return text;
    }
}