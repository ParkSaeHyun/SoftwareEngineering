package com.oncloth.onclothproject.service;

import com.oncloth.onclothproject.model.User;
import com.oncloth.onclothproject.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class SearchService {
    private final UserRepository userRepository;

    public SearchService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public String foundPw(String id){
        //user db에서 해당 id가 존재하는 경우, 아닌경우
        Optional<User> optionalUser = userRepository.findByUserid(id);
        if(optionalUser.isEmpty()){ //존재하지 않을 경우
            throw new IllegalStateException("아이디가 존재하지 않습니다.");
        }
        return optionalUser.get().getUserpassword();
    }
}
