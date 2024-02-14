package com.home.home.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.home.home.entity.Inquiry;
import com.home.home.repository.InquiryRepository;

@Service
public class InquiryService {

    private final InquiryRepository inquiryRepository;

    public InquiryService(InquiryRepository inquiryRepository) {
        this.inquiryRepository = inquiryRepository;
    }

    public List<Inquiry> getAllInquiries() {
        return inquiryRepository.findAll();
    }

    public Inquiry saveInquiry(Inquiry inquiry) {
        return inquiryRepository.save(inquiry);
    }

    public void deleteInquiryById(Long id) {
        inquiryRepository.deleteById(id);
    }

    public Inquiry getInquiryById(Long id) {
        Optional<Inquiry> optionalInquiry = inquiryRepository.findById(id);
        return optionalInquiry.orElse(null);
    }

    public Inquiry updateInquiryStatus(Long id, String status) {
        Inquiry inquiry = getInquiryById(id);
        if (inquiry != null) {
            inquiry.setStatus(status);
            return inquiryRepository.save(inquiry);
        } else {
            // Handle case where inquiry with given id is not found
            // For example, throw an exception or return null
            return null;
        }
    }
    public Inquiry updateInquiryResponse(Long id, String response) {
        Inquiry inquiry = getInquiryById(id);
        if (inquiry != null) {
            inquiry.setResponse(response);
            return inquiryRepository.save(inquiry);
        } else {
            // Handle case where inquiry with given id is not found
            // For example, throw an exception or return null
            return null;
        }
    }
    
}
