package com.oncloth.onclothproject.service;

import com.oncloth.onclothproject.model.LoginForm;
import com.oncloth.onclothproject.model.User;
import com.oncloth.onclothproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {
    private final UserRepository userRepository;

    @Autowired
    public LoginService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public Optional<User> userValidation(LoginForm loginForm){
        Optional<User> optionalUser = userRepository.findByUserid(loginForm.getUserid());

        if(optionalUser.isPresent()){//id가 존재
            if(optionalUser.get().getUserpassword().equals(loginForm.getUserpassword())){ //pw가 일치할 경우
                return optionalUser;
            }
            throw new IllegalStateException("비밀번호가 일치하지 않습니다.");
        }
        throw new IllegalStateException("아이디가 존재하지 않습니다.");

    }
}
