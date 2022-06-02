package com.oncloth.onclothproject.controller;

import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.oncloth.onclothproject.dto.UserDto;
import com.oncloth.onclothproject.model.User;
import com.oncloth.onclothproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/api/register")
    public String createUser(@RequestBody UserDto userDto){

        userService.createUser(userDto);

        return "";
    }
}
