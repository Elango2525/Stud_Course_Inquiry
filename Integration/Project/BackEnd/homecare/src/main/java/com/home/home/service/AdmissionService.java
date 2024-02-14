package com.home.home.service;

import org.springframework.stereotype.Service;

import com.home.home.dto.AdmissionDTO;
import com.home.home.entity.Admission;
import com.home.home.repository.AdmissionRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AdmissionService {
    private final AdmissionRepository admissionRepository;

    public AdmissionService(AdmissionRepository admissionRepository) {
        this.admissionRepository = admissionRepository;
    }

    public Admission applyForAdmission(AdmissionDTO admissionDTO) {
        Admission admission = new Admission(
            admissionDTO.getFullName(),
            admissionDTO.getGender(),
            admissionDTO.getNationality(),
            admissionDTO.getContactNumber(),
            admissionDTO.getEmailAddress(),
            admissionDTO.getQualification(),
            admissionDTO.getSchoolCollege(),
            admissionDTO.getYearOfPassing(),
            admissionDTO.getSelectedCourse(),
            admissionDTO.getBatchTiming(),
            admissionDTO.getEmergencyContact(),
            admissionDTO.getSpecialRequirements(),
            admissionDTO.isTermsAndConditions(),
            admissionDTO.getSignature()
        );
        return admissionRepository.save(admission);
    }

    public List<Admission> getAllAdmissions() {
        return admissionRepository.findAll();
    }

    public Optional<Admission> getAdmissionById(Long id) {
        return admissionRepository.findById(id);
    }
    
    public void deleteAdmission(Long id) {
        admissionRepository.deleteById(id);
    }
    
    public Admission updateAdmission(Long id, AdmissionDTO admissionDTO) {
        Optional<Admission> admissionOptional = admissionRepository.findById(id);
        if (admissionOptional.isPresent()) {
            Admission admission = admissionOptional.get();
            // Update admission object with new data from admissionDTO
            admission.setFullName(admissionDTO.getFullName());
            admission.setGender(admissionDTO.getGender());
            admission.setNationality(admissionDTO.getNationality());
            admission.setContactNumber(admissionDTO.getContactNumber());
            admission.setEmailAddress(admissionDTO.getEmailAddress());
            admission.setQualification(admissionDTO.getQualification());
            admission.setSchoolCollege(admissionDTO.getSchoolCollege());
            admission.setYearOfPassing(admissionDTO.getYearOfPassing());
            admission.setSelectedCourse(admissionDTO.getSelectedCourse());
            admission.setBatchTiming(admissionDTO.getBatchTiming());
            admission.setEmergencyContact(admissionDTO.getEmergencyContact());
            admission.setSpecialRequirements(admissionDTO.getSpecialRequirements());
            admission.setTermsAndConditions(admissionDTO.isTermsAndConditions());
            admission.setSignature(admissionDTO.getSignature());
            
            return admissionRepository.save(admission);
        } else {
            throw new RuntimeException("Admission not found with id: " + id);
        }
    }
}
