package com.home.home.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "admins")
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String instructor;
    private String totalHours;
    private String totalPackage;
    private String amountPerMonth;
    private String coverImage;
    
    // private String teacherName;
    private String teacherImage;

    // Constructors, getters, and setters


    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
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

    // public String getTeacherName() {
    //     return teacherName;
    // }

    // public void setTeacherName(String teacherName) {
    //     this.teacherName = teacherName;
    // }

    public String getTeacherImage() {
        return teacherImage;
    }

    public void setTeacherImage(String teacherImage) {
        this.teacherImage = teacherImage;
    }

    

    public Admin(Long id, String title, String description, String instructor, String totalHours, String totalPackage,
            String amountPerMonth, String coverImage, String teacherName, String teacherImage) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.instructor = instructor;
        this.totalHours = totalHours;
        this.totalPackage = totalPackage;
        this.amountPerMonth = amountPerMonth;
        this.coverImage = coverImage;
        // this.teacherName = teacherName;
        this.teacherImage = teacherImage;
    }

    public Admin() {
    }





}
