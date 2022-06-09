package com.oncloth.onclothproject.controller;

import com.oncloth.onclothproject.model.LoginForm;
import com.oncloth.onclothproject.model.User;
import com.oncloth.onclothproject.service.LoginService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@Slf4j //로그로 출력값 확인하는 테스트 용도
@RestController
public class LoginController {
    private final LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService){
        this.loginService = loginService;
    }

    @PostMapping("/api/login/")
    public User loginUser(@RequestBody LoginForm loginForm){
        Optional<User> optionalUser = loginService.userValidation(loginForm);
//        log.info("테스트테스트 보이는지?");
//        log.info(optionalUser.get().getUserid());
//        log.info(optionalUser.get().getUserpassword());
        return optionalUser.get();
    }
}
