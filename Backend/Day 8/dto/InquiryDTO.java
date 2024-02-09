// InquiryDTO.java

package com.home.home.dto;


public class InquiryDTO {
    private String courseName;
    private String courseId;
    private String studentName;
    private String studentId;
    private String contactInformation;
    private String inquiryType;
    private String message;
    private String preferredContactMethod;
    private String urgencyLevel;
    
    public String getCourseName() {
        return courseName;
    }
    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }
    public String getCourseId() {
        return courseId;
    }
    public void setCourseId(String courseId) {
        this.courseId = courseId;
    }
    public String getStudentName() {
        return studentName;
    }
    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }
    public String getStudentId() {
        return studentId;
    }
    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }
    public String getContactInformation() {
        return contactInformation;
    }
    public void setContactInformation(String contactInformation) {
        this.contactInformation = contactInformation;
    }
    public String getInquiryType() {
        return inquiryType;
    }
    public void setInquiryType(String inquiryType) {
        this.inquiryType = inquiryType;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public String getPreferredContactMethod() {
        return preferredContactMethod;
    }
    public void setPreferredContactMethod(String preferredContactMethod) {
        this.preferredContactMethod = preferredContactMethod;
    }
    public String getUrgencyLevel() {
        return urgencyLevel;
    }
    public void setUrgencyLevel(String urgencyLevel) {
        this.urgencyLevel = urgencyLevel;
    }

    // Getters and Setters
}
