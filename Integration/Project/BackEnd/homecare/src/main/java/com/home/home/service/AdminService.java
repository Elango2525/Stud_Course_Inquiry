package com.home.home.service;

import org.springframework.stereotype.Service;
import com.home.home.dto.AdminDTO;
import com.home.home.entity.Admin;
import com.home.home.repository.AdminRepository;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AdminService {
    
    private final AdminRepository adminRepository;

    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    public void addCourse(AdminDTO courseInfo) {
        Admin admin = new Admin();
        mapDTOToEntity(courseInfo, admin);
        adminRepository.save(admin);
    }

    public List<AdminDTO> getAllCourses() {
        List<Admin> allCourses = adminRepository.findAll();
        return allCourses.stream()
                .map(this::mapEntityToDTO)
                .collect(Collectors.toList());
    }

    public AdminDTO getCourseById(Long id) {
        Optional<Admin> course = adminRepository.findById(id);
        return course.map(this::mapEntityToDTO).orElse(null);
    }

    public void editCourse(Long id, AdminDTO courseInfo) {
        Optional<Admin> course = adminRepository.findById(id);
        course.ifPresent(admin -> {
            mapDTOToEntity(courseInfo, admin);
            adminRepository.save(admin);
        });
    }

    public void deleteCourse(Long id) {
        adminRepository.deleteById(id);
    }

    private void mapDTOToEntity(AdminDTO dto, Admin entity) {
        entity.setTitle(dto.getTitle());
        entity.setDescription(dto.getDesc());
        entity.setInstructor(dto.getInstructor());
        entity.setTotalHours(dto.getTotalHours());
        entity.setTotalPackage(dto.getTotalPackage());
        entity.setAmountPerMonth(dto.getAmountPerMonth());
        entity.setCoverImage(dto.getCoverImage());
        // entity.setTeacherName(dto.getTeacherName());
        entity.setTeacherImage(dto.getTeacherImage());
    }

    private AdminDTO mapEntityToDTO(Admin entity) {
        AdminDTO dto = new AdminDTO();
        dto.setTitle(entity.getTitle());
        dto.setDesc(entity.getDescription());
        dto.setInstructor(entity.getInstructor());
        dto.setTotalHours(entity.getTotalHours());
        dto.setTotalPackage(entity.getTotalPackage());
        dto.setAmountPerMonth(entity.getAmountPerMonth());
        dto.setCoverImage(entity.getCoverImage());
        // dto.setTeacherName(entity.getTeacherName());
        dto.setTeacherImage(entity.getTeacherImage());
        return dto;
    }
}
