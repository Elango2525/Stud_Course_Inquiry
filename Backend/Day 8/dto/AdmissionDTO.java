package com.home.home.dto;

public class AdmissionDTO {
    private String fullName;
    private String gender;
    private String nationality;
    private String contactNumber;
    private String emailAddress;
    private String qualification;
    private String schoolCollege;
    private int yearOfPassing;
    private String selectedCourse;
    private int batchTiming;
    private String emergencyContact;
    private String specialRequirements;
    private boolean termsAndConditions;
    private String signature;
    
    // Constructors
    public AdmissionDTO() {
    }

    public AdmissionDTO(String fullName, String gender, String nationality, String contactNumber, String emailAddress, String qualification, String schoolCollege, int yearOfPassing, String selectedCourse, int batchTiming, String emergencyContact, String specialRequirements, boolean termsAndConditions, String signature) {
        this.fullName = fullName;
        this.gender = gender;
        this.nationality = nationality;
        this.contactNumber = contactNumber;
        this.emailAddress = emailAddress;
        this.qualification = qualification;
        this.schoolCollege = schoolCollege;
        this.yearOfPassing = yearOfPassing;
        this.selectedCourse = selectedCourse;
        this.batchTiming = batchTiming;
        this.emergencyContact = emergencyContact;
        this.specialRequirements = specialRequirements;
        this.termsAndConditions = termsAndConditions;
        this.signature = signature;
    }
    
    // Getters and Setters
    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public String getSchoolCollege() {
        return schoolCollege;
    }

    public void setSchoolCollege(String schoolCollege) {
        this.schoolCollege = schoolCollege;
    }

    public int getYearOfPassing() {
        return yearOfPassing;
    }

    public void setYearOfPassing(int yearOfPassing) {
        this.yearOfPassing = yearOfPassing;
    }

    public String getSelectedCourse() {
        return selectedCourse;
    }

    public void setSelectedCourse(String selectedCourse) {
        this.selectedCourse = selectedCourse;
    }

    public int getBatchTiming() {
        return batchTiming;
    }

    public void setBatchTiming(int batchTiming) {
        this.batchTiming = batchTiming;
    }

    public String getEmergencyContact() {
        return emergencyContact;
    }

    public void setEmergencyContact(String emergencyContact) {
        this.emergencyContact = emergencyContact;
    }

    public String getSpecialRequirements() {
        return specialRequirements;
    }

    public void setSpecialRequirements(String specialRequirements) {
        this.specialRequirements = specialRequirements;
    }

    public boolean isTermsAndConditions() {
        return termsAndConditions;
    }

    public void setTermsAndConditions(boolean termsAndConditions) {
        this.termsAndConditions = termsAndConditions;
    }

    public String getSignature() {
        return signature;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }
}
