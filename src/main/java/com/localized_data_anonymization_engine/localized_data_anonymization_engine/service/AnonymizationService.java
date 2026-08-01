package com.localized_data_anonymization_engine.localized_data_anonymization_engine.service;

import org.springframework.stereotype.Service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class AnonymizationService {

    public AnonymizationResult anonymize(String content) {

        AnonymizationResult result = new AnonymizationResult();

        String anonymized = content;

        // Email
        result.setEmailCount(countMatches(anonymized,
                "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}"));
        anonymized = anonymized.replaceAll(
                "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}",
                "[EMAIL]"
        );

        // Phone
        result.setPhoneCount(countMatches(anonymized,
                "\\b\\d{10}\\b"));
        anonymized = anonymized.replaceAll(
                "\\b\\d{10}\\b",
                "[PHONE]"
        );

        // PAN
        result.setPanCount(countMatches(anonymized,
                "\\b[A-Z]{5}\\d{4}[A-Z]\\b"));
        anonymized = anonymized.replaceAll(
                "\\b[A-Z]{5}\\d{4}[A-Z]\\b",
                "[PAN]"
        );

        // Passport
        result.setPassportCount(countMatches(anonymized,
                "\\b[A-PR-WYa-pr-wy][0-9]{7}\\b"));
        anonymized = anonymized.replaceAll(
                "\\b[A-PR-WYa-pr-wy][0-9]{7}\\b",
                "[PASSPORT]"
        );

        // Card
        result.setCardCount(countMatches(anonymized,
                "\\b(?:\\d{4}[ -]?){3}\\d{4}\\b"));
        anonymized = anonymized.replaceAll(
                "\\b(?:\\d{4}[ -]?){3}\\d{4}\\b",
                "[CARD]"
        );

        // Aadhaar
        result.setAadhaarCount(countMatches(anonymized,
                "\\b\\d{4}\\s\\d{4}\\s\\d{4}\\b"));
        anonymized = anonymized.replaceAll(
                "\\b\\d{4}\\s\\d{4}\\s\\d{4}\\b",
                "[AADHAAR]"
        );

        // IFSC
        result.setIfscCount(countMatches(anonymized,
                "\\b[A-Z]{4}0[A-Z0-9]{6}\\b"));
        anonymized = anonymized.replaceAll(
                "\\b[A-Z]{4}0[A-Z0-9]{6}\\b",
                "[IFSC]"
        );

        // Account
        result.setAccountCount(countMatches(anonymized,
                "\\b\\d{9,18}\\b"));
        anonymized = anonymized.replaceAll(
                "\\b\\d{9,18}\\b",
                "[ACCOUNT]"
        );

        result.setAnonymizedContent(anonymized);

        return result;
    }

    private int countMatches(String text, String regex) {

        Matcher matcher = Pattern.compile(regex).matcher(text);

        int count = 0;

        while (matcher.find()) {
            count++;
        }

        return count;
    }
}