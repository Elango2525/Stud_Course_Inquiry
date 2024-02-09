package com.home.home.dto;



public class AdminDTO {
    private String title;
    private String description;
    private String instructor;
    private String totalHours;
    private String totalPackage;
    private String amountPerMonth;
    private String coverImage;
    private String teacherName;
    private String teacherImage;

    public AdminDTO() {
    }

    public AdminDTO(String title, String description, String instructor, String totalHours, String totalPackage, String amountPerMonth, String coverImage, String teacherName, String teacherImage) {
        this.title = title;
        this.description = description;
        this.instructor = instructor;
        this.totalHours = totalHours;
        this.totalPackage = totalPackage;
        this.amountPerMonth = amountPerMonth;
        this.coverImage = coverImage;
        this.teacherName = teacherName;
        this.teacherImage = teacherImage;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDesc() {
        return description;
    }

    public void setDesc(String description) {
        this.description = description;
    }

    public String getInstructor() {
        return instructor;
    }

    public void setInstructor(String instructor) {
        this.instructor = instructor;
    }

    public String getTotalHours() {
        return totalHours;
    }

    public void setTotalHours(String totalHours) {
        this.totalHours = totalHours;
    }

    public String getTotalPackage() {
        return totalPackage;
    }

    public void setTotalPackage(String totalPackage) {
        this.totalPackage = totalPackage;
    }

    public String getAmountPerMonth() {
        return amountPerMonth;
    }

    public void setAmountPerMonth(String amountPerMonth) {
        this.amountPerMonth = amountPerMonth;
    }

    public String getCoverImage() {
        return coverImage;
    }

    public void setCoverImage(String coverImage) {
        this.coverImage = coverImage;
    }

    public String getTeacherName() {
        return teacherName;
    }

    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }

    public String getTeacherImage() {
        return teacherImage;
    }

    public void setTeacherImage(String teacherImage) {
        this.teacherImage = teacherImage;
    }
}
