package com.localized_data_anonymization_engine.localized_data_anonymization_engine.util;

import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public class DocxUtil {

    public static String extractText(MultipartFile file) throws IOException {

        XWPFDocument document = new XWPFDocument(file.getInputStream());

        StringBuilder text = new StringBuilder();

        for (XWPFParagraph paragraph : document.getParagraphs()) {

            text.append(paragraph.getText());
            text.append("\n");

        }

        document.close();

        return text.toString();
    }
}