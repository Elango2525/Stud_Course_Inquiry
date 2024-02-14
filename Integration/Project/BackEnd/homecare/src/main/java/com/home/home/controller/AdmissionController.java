package com.home.home.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.home.home.dto.AdmissionDTO;
import com.home.home.entity.Admission;
import com.home.home.service.AdmissionService;

@RestController
@RequestMapping("/admissions")
@CrossOrigin
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
    
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAdmission(@RequestParam Long id) {
        admissionService.deleteAdmission(id);
        return new ResponseEntity<>("Admission deleted successfully!", HttpStatus.OK);
    }
    
    @PatchMapping("/{id}")
    public ResponseEntity<Admission> updateAdmission(@RequestParam Long id, @RequestBody AdmissionDTO admissionDTO) {
        Admission updatedAdmission = admissionService.updateAdmission(id, admissionDTO);
        return new ResponseEntity<>(updatedAdmission, HttpStatus.OK);
    }
    
    // Example for getting all admissions
    @GetMapping
    public ResponseEntity<List<Admission>> getAllAdmissions() {
        List<Admission> admissions = admissionService.getAllAdmissions();
        return new ResponseEntity<>(admissions, HttpStatus.OK);
    }
    
    // Example for getting an admission by ID
    @GetMapping("/{id}")
    public ResponseEntity<Admission> getAdmissionById(@RequestParam Long id) {
        Optional<Admission> admission = admissionService.getAdmissionById(id);
        return admission.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
