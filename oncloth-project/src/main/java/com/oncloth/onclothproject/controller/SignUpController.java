package com.oncloth.onclothproject.controller;

import com.oncloth.onclothproject.dto.UserDto;
import com.oncloth.onclothproject.model.User;
import com.oncloth.onclothproject.service.SignUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class SignUpController {

    private final SignUpService signUpService;
    @Autowired
    public SignUpController(SignUpService signUpService){
        this.signUpService = signUpService;
    }


    @PostMapping("/api/register/")
    public User createUser(@RequestBody UserDto userDto){
        return signUpService.join(new User(userDto));
    }

}
