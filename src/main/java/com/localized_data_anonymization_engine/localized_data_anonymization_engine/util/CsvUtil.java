package com.localized_data_anonymization_engine.localized_data_anonymization_engine.util;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public class CsvUtil {

    public static String extractText(MultipartFile file) throws IOException {

        return new String(file.getBytes());

    }
}