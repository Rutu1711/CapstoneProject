package com.loginAuthentication.service;

import com.loginAuthentication.entity.User;
import com.loginAuthentication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User authenticate(String email, String password) {
        User user = userRepository.findByEmailAndPassword(email, password);

        if (user != null) {
            return user;
        }
        return null;
    }

    public User SignUpUser(User user){
        User created = userRepository.save(user);
        return created;
    }

}
