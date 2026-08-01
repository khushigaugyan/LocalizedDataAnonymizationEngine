package com.localized_data_anonymization_engine.localized_data_anonymization_engine.util;

import com.localized_data_anonymization_engine.localized_data_anonymization_engine.service.AnonymizationResult;
import com.localized_data_anonymization_engine.localized_data_anonymization_engine.service.AnonymizationService;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

public class ExcelGeneratorUtil {

    public static byte[] anonymizeExcel(
            MultipartFile file,
            AnonymizationService service) throws IOException {

        Workbook workbook = new XSSFWorkbook(file.getInputStream());

        for (Sheet sheet : workbook) {

            for (Row row : sheet) {

                for (Cell cell : row) {

                    if (cell.getCellType() == CellType.STRING) {

                        String value = cell.getStringCellValue();

                        AnonymizationResult result =
                                service.anonymize(value);

                        cell.setCellValue(result.getAnonymizedContent());
                    }
                }
            }
        }

        ByteArrayOutputStream output = new ByteArrayOutputStream();

        workbook.write(output);
        workbook.close();

        return output.toByteArray();
    }
}