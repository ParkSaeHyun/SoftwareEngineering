package com.oncloth.onclothproject.service;


import com.oncloth.onclothproject.dto.UserDto;
import com.oncloth.onclothproject.model.User;
import com.oncloth.onclothproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void createUser(UserDto userDto){
//        userRepository.save(userDto)
    } //save는 jpa 메소드
}
