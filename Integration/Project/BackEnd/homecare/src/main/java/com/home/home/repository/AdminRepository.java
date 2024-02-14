package com.home.home.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.home.home.entity.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
}

