package com.home.home.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.home.home.dto.InquiryDTO;
import com.home.home.entity.Inquiry;
import com.home.home.service.InquiryService;

@RestController
@RequestMapping("/inquiries")
@CrossOrigin
public class InquiryController {

    private final InquiryService inquiryService;

    public InquiryController(InquiryService inquiryService) {
        this.inquiryService = inquiryService;
    }
    
    @GetMapping("/form")
    public List<Inquiry> getAllInquiries() {
        return inquiryService.getAllInquiries();
    }

    @PostMapping
    public Inquiry addInquiry(@RequestBody InquiryDTO inquiryDTO) {
        // Set default status to "In Progress"
        inquiryDTO.setStatus("In Progress");
        Inquiry inquiry = convertToEntity(inquiryDTO);
        return inquiryService.saveInquiry(inquiry);
    }
    
    @PutMapping("/{id}/status")
    public Inquiry updateInquiryStatus(@PathVariable Long id, @RequestBody String status) {
        Inquiry inquiry = inquiryService.getInquiryById(id);
        inquiry.setStatus(status);
        return inquiryService.saveInquiry(inquiry);
    }
    @PutMapping("/{id}/response")
public Inquiry updateInquiryResponse(@PathVariable Long id, @RequestBody String response) {
    Inquiry inquiry = inquiryService.getInquiryById(id);
    inquiry.setResponse(response);
    return inquiryService.saveInquiry(inquiry);
}

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteInquiryById(@PathVariable Long id) {
        inquiryService.deleteInquiryById(id);
    }

    private Inquiry convertToEntity(InquiryDTO inquiryDTO) {
        Inquiry inquiry = new Inquiry();
        inquiry.setCourseName(inquiryDTO.getCourseName());
        inquiry.setCourseId(inquiryDTO.getCourseId());
        inquiry.setStudentName(inquiryDTO.getStudentName());
        inquiry.setStudentId(inquiryDTO.getStudentId());
        inquiry.setContactInformation(inquiryDTO.getContactInformation());
        inquiry.setInquiryType(inquiryDTO.getInquiryType());
        inquiry.setMessage(inquiryDTO.getMessage());
        inquiry.setPreferredContactMethod(inquiryDTO.getPreferredContactMethod());
        inquiry.setUrgencyLevel(inquiryDTO.getUrgencyLevel());
        inquiry.setStatus(inquiryDTO.getStatus()); // Set status
        return inquiry;
    }

    // Add other controller methods as needed
}
