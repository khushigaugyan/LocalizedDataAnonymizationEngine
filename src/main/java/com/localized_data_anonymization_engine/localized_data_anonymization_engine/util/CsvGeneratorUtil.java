package com.localized_data_anonymization_engine.localized_data_anonymization_engine.util;

import com.localized_data_anonymization_engine.localized_data_anonymization_engine.service.AnonymizationResult;
import com.localized_data_anonymization_engine.localized_data_anonymization_engine.service.AnonymizationService;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;

public class CsvGeneratorUtil {

    public static byte[] anonymizeCsv(
            MultipartFile file,
            AnonymizationService service) throws IOException {

        BufferedReader reader =
                new BufferedReader(new InputStreamReader(file.getInputStream()));

        ByteArrayOutputStream output = new ByteArrayOutputStream();

        String line;

        while ((line = reader.readLine()) != null) {

            String[] values = line.split(",");

            for (int i = 0; i < values.length; i++) {

                AnonymizationResult result =
                        service.anonymize(values[i]);

                values[i] = result.getAnonymizedContent();
            }

            output.write(String.join(",", values).getBytes());

            output.write("\n".getBytes());
        }

        return output.toByteArray();
    }
}