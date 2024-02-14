package com.home.home.controller;

import org.springframework.web.bind.annotation.*;
import com.home.home.dto.AdminDTO;
import com.home.home.service.AdminService;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("/addCourse")
    public void addCourse(@RequestBody AdminDTO courseInfo) {
        adminService.addCourse(courseInfo);
    }

    @GetMapping("/getCourses")
    public List<AdminDTO> getCourses() {
        return adminService.getAllCourses();
    }

    @GetMapping("/getCourse/{id}")
    public AdminDTO getCourse(@PathVariable Long id) {
        return adminService.getCourseById(id);
    }

    @PutMapping("/editCourse/{id}")
    public void editCourse(@PathVariable Long id, @RequestBody AdminDTO courseInfo) {
        adminService.editCourse(id, courseInfo);
    }

    @DeleteMapping("/deleteCourse/{id}")
    public void deleteCourse(@PathVariable Long id) {
        adminService.deleteCourse(id);
    }
}
