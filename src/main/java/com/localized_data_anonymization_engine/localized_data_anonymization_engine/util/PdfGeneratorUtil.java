package com.localized_data_anonymization_engine.localized_data_anonymization_engine.util;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

public class PdfGeneratorUtil {

    public static byte[] generatePdf(String text) throws IOException {

        PDDocument document = new PDDocument();
        PDPage page = new PDPage();
        document.addPage(page);

        PDPageContentStream contentStream =
                new PDPageContentStream(document, page);

        contentStream.beginText();
        contentStream.setFont(PDType1Font.HELVETICA, 12);
        contentStream.newLineAtOffset(50, 700);

        text = text.replaceAll("[\\p{Cntrl}&&[^\\n\\t]]", "");
        String[] lines = text.split("\n");

        for (String line : lines) {

            StringBuilder cleanedLine = new StringBuilder();

            for (char c : line.toCharArray()) {

                if (c >= 32 && c <= 126) {
                    cleanedLine.append(c);
                }
            }

            System.out.println("Writing: " + cleanedLine);

            contentStream.showText(cleanedLine.toString());
            contentStream.newLineAtOffset(0, -18);
        }

        contentStream.endText();
        contentStream.close();

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

        document.save(outputStream);
        document.close();

        return outputStream.toByteArray();
    }
}