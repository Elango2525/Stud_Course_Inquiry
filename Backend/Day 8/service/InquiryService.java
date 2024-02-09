package com.home.home.service;

import java.util.List;

// InquiryService.java
import org.springframework.stereotype.Service;

import com.home.home.entity.Inquiry;
import com.home.home.repository.InquiryRepository;

@Service
public class InquiryService {

    private final InquiryRepository inquiryRepository;

    //@Autowired
    public InquiryService(InquiryRepository inquiryRepository) {
        this.inquiryRepository = inquiryRepository;
    }

    public List<Inquiry> getAllInquiries() {
        return inquiryRepository.findAll();
    }

    public Inquiry saveInquiry(Inquiry inquiry) {
        return inquiryRepository.save(inquiry);
    }
}
