package com.home.home.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.home.home.entity.Admission;

@Repository
public interface AdmissionRepository extends JpaRepository<Admission, Long> {
    // Add custom query methods if needed
}

