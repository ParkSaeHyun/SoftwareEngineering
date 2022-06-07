package com.oncloth.onclothproject.service;

import com.oncloth.onclothproject.dto.UserDto;
import com.oncloth.onclothproject.model.User;
import com.oncloth.onclothproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SignUpService {
    private final UserRepository userRepository;
    @Autowired
    public SignUpService(UserRepository userRepository){
        this.userRepository = userRepository;
    }
    public User join(User user){
        validDuplicate(user);
        userRepository.save(user);
        return user;
    }

    private void validDuplicate(User user) {
        Optional<User> optionalUser = userRepository.findByUserid(user.getUserid());
        optionalUser.ifPresent(u -> {
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        });
    }
}
