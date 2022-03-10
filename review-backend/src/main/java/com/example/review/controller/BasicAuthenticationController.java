package com.example.review.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.review.model.Authentication;

@CrossOrigin(origins={ "http://localhost:3000" })
@RestController
@RequestMapping("/api/")
public class BasicAuthenticationController {

    @GetMapping(path = "auth")
	@PreAuthorize("hasRole('ADMIN')")
    public Authentication userAuthentication() {
        return new Authentication("You are authenticated");
    }   
}
