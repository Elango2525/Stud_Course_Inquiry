package com.home.home.service;

import com.home.home.dto.request.LoginRequest;
import com.home.home.dto.request.RegisterRequest;
import com.home.home.dto.response.LoginResponse;
import com.home.home.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
}
