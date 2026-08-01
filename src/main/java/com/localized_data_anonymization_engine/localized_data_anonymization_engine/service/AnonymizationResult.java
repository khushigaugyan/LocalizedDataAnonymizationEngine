package com.localized_data_anonymization_engine.localized_data_anonymization_engine.service;

public class AnonymizationResult {

    private String anonymizedContent;

    private int emailCount;
    private int phoneCount;
    private int panCount;
    private int aadhaarCount;
    private int passportCount;
    private int cardCount;
    private int ifscCount;
    private int accountCount;

    public String getAnonymizedContent() {
        return anonymizedContent;
    }

    public void setAnonymizedContent(String anonymizedContent) {
        this.anonymizedContent = anonymizedContent;
    }

    public int getEmailCount() {
        return emailCount;
    }

    public void setEmailCount(int emailCount) {
        this.emailCount = emailCount;
    }

    public int getPhoneCount() {
        return phoneCount;
    }

    public void setPhoneCount(int phoneCount) {
        this.phoneCount = phoneCount;
    }

    public int getPanCount() {
        return panCount;
    }

    public void setPanCount(int panCount) {
        this.panCount = panCount;
    }

    public int getAadhaarCount() {
        return aadhaarCount;
    }

    public void setAadhaarCount(int aadhaarCount) {
        this.aadhaarCount = aadhaarCount;
    }

    public int getPassportCount() {
        return passportCount;
    }

    public void setPassportCount(int passportCount) {
        this.passportCount = passportCount;
    }

    public int getCardCount() {
        return cardCount;
    }

    public void setCardCount(int cardCount) {
        this.cardCount = cardCount;
    }

    public int getIfscCount() {
        return ifscCount;
    }

    public void setIfscCount(int ifscCount) {
        this.ifscCount = ifscCount;
    }

    public int getAccountCount() {
        return accountCount;
    }

    public void setAccountCount(int accountCount) {
        this.accountCount = accountCount;
    }
}