package com.campus.marketplace.controller;

import com.campus.marketplace.dto.LoginRequest;
import com.campus.marketplace.dto.SignupRequest;
import com.campus.marketplace.service.AuthService;

import jakarta.validation.Valid;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signup")
    @CrossOrigin(origins = "http://localhost:5173")
    public String signup(@Valid @RequestBody SignupRequest request) {

        return authService.signup(request);
    }
    @PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:5173")
    public String login(@Valid @RequestBody LoginRequest request) {

        return authService.login(request);
    }
}