package com.localized_data_anonymization_engine.localized_data_anonymization_engine.util;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public class ExcelUtil {

    public static String extractText(MultipartFile file) throws IOException {

        Workbook workbook = new XSSFWorkbook(file.getInputStream());

        StringBuilder text = new StringBuilder();

        for (Sheet sheet : workbook) {

            for (Row row : sheet) {

                for (Cell cell : row) {

                    text.append(cell.toString());
                    text.append(" ");

                }

                text.append("\n");

            }

        }

        workbook.close();

        return text.toString();
    }
}