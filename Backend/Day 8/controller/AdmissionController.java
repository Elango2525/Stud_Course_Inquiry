package com.home.home.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.home.home.dto.AdmissionDTO;
import com.home.home.entity.Admission;
import com.home.home.service.AdmissionService;

@RestController
@RequestMapping("/admissions")
public class AdmissionController {
    private final AdmissionService admissionService;
    
    public AdmissionController(AdmissionService admissionService) {
        this.admissionService = admissionService;
    }
    
    @PostMapping("/apply")
    public ResponseEntity<String> applyForAdmission(@RequestBody AdmissionDTO admissionDTO) {
        admissionService.applyForAdmission(admissionDTO);
        return new ResponseEntity<>("Admission application submitted successfully!", HttpStatus.CREATED);
    }
    
    
    // Add more endpoints for CRUD operations if needed
    // For example: GET, PUT, DELETE
    
    // Example for getting all admissions
    @GetMapping
    public ResponseEntity<List<Admission>> getAllAdmissions() {
        List<Admission> admissions = admissionService.getAllAdmissions();
        return new ResponseEntity<>(admissions, HttpStatus.OK);
    }
}

