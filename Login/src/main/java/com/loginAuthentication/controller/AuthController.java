package com.loginAuthentication.controller;

import com.loginAuthentication.entity.User;
import com.loginAuthentication.repository.UserRepository;
import com.loginAuthentication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public Map<String,Object> login(@RequestBody User loginRequest){

        User user = userService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());
        Map<String,Object> response = new HashMap<>();

        if (user != null ) {
            response.put("status","success");
        } else {
            response.put("status","fail");
            response.put("message", "Invalid email or password");
        }

        return response;
    }

    @PostMapping("/sign-up")
    public User signUp(@RequestBody User user){
        User created = userService.SignUpUser(user);
        return created;
    }
}
