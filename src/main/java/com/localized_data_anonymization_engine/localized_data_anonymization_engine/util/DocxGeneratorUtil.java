package com.localized_data_anonymization_engine.localized_data_anonymization_engine.util;

import com.localized_data_anonymization_engine.localized_data_anonymization_engine.service.AnonymizationResult;
import com.localized_data_anonymization_engine.localized_data_anonymization_engine.service.AnonymizationService;
import org.apache.poi.xwpf.usermodel.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

public class DocxGeneratorUtil {

    public static byte[] anonymizeDocx(
            MultipartFile file,
            AnonymizationService service) throws IOException {

        XWPFDocument document = new XWPFDocument(file.getInputStream());

        for (XWPFParagraph paragraph : document.getParagraphs()) {

            for (XWPFRun run : paragraph.getRuns()) {

                String text = run.getText(0);

                if (text != null) {

                    AnonymizationResult result = service.anonymize(text);

                    run.setText(result.getAnonymizedContent(), 0);
                }
            }
        }

        ByteArrayOutputStream output = new ByteArrayOutputStream();

        document.write(output);

        document.close();

        return output.toByteArray();
    }
}