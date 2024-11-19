package com.test.controller;

import com.test.model.User;
import com.test.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    
    @PostMapping("/register/user")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        user.setRole("USER");  // Set role to USER
        User registeredUser = userService.registerUser(user);
        return ResponseEntity.ok(registeredUser);
    }

    
    @PostMapping("/register/doctor")
    public ResponseEntity<?> registerDoctor(@RequestBody User doctor) {
        doctor.setRole("DOCTOR");  // Set role to DOCTOR
        User registeredDoctor = userService.registerUser(doctor);
        return ResponseEntity.ok(registeredDoctor);
    }

    
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User loginRequest) {
        Optional<User> user = userService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());
        return user.isPresent() ? ResponseEntity.ok(user.get())
                                : ResponseEntity.status(401).body("Invalid email or password");
    }
}