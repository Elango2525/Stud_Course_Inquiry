package com.home.home.service;
import org.springframework.stereotype.Service;

import com.home.home.dto.AdmissionDTO;
import com.home.home.entity.Admission;
import com.home.home.repository.AdmissionRepository;

import java.util.List;

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

    // Add more service methods if needed
}
