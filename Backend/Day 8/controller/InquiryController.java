package com.home.home.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
// InquiryController.java
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.home.home.dto.InquiryDTO;
import com.home.home.entity.Inquiry;
import com.home.home.service.InquiryService;



@RestController
@RequestMapping("/inquiries")
@CrossOrigin
public class InquiryController {

    private final InquiryService inquiryService;

    //@Autowired
    public InquiryController(InquiryService inquiryService) {
        this.inquiryService = inquiryService;
    }
    
    @GetMapping("/form")
    public List<Inquiry> getAllInquiries() {
        return inquiryService.getAllInquiries();
    }

    @PostMapping
    public Inquiry addInquiry(@RequestBody InquiryDTO inquiryDTO) {
        Inquiry inquiry = convertToEntity(inquiryDTO);
        return inquiryService.saveInquiry(inquiry);
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
        return inquiry;
    }

    // Add other controller methods as needed
}
