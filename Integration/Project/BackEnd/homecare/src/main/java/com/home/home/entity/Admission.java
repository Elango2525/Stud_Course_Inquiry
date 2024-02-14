package com.home.home.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "admissions")
public class Admission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "fullName")
    private String fullName;
    
    @Column(name = "gender")
    private String gender;
    
    @Column(name = "nationality")
    private String nationality;
    
    @Column(name = "contactNumber")
    private String contactNumber;
    
    @Column(name = "emailAddress")
    private String emailAddress;
    
    @Column(name = "qualification")
    private String qualification;
    
    @Column(name = "schoolCollege")
    private String schoolCollege;
    
    @Column(name = "yearOfPassing")
    private int yearOfPassing;
    
    @Column(name = "selectedCourse")
    private String selectedCourse;
    
    @Column(name = "batchTiming")
    private int batchTiming;
    
    @Column(name = "emergencyContact")
    private String emergencyContact;
    
    @Column(name = "specialRequirements")
    private String specialRequirements;
    
    @Column(name = "termsAndConditions")
    private boolean termsAndConditions;
    
    @Column(name = "signature")
    private String signature;
    
    // Constructors
    public Admission() {
    }

    public Admission(String fullName, String gender, String nationality, String contactNumber, String emailAddress, String qualification, String schoolCollege, int yearOfPassing, String selectedCourse, int batchTiming, String emergencyContact, String specialRequirements, boolean termsAndConditions, String signature) {
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
    
    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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
