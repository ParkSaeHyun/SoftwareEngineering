package com.oncloth.onclothproject.service;

import com.oncloth.onclothproject.model.ModifyForm;
import com.oncloth.onclothproject.model.User;
import com.oncloth.onclothproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ModifyService {
    private final UserRepository userRepository;

    @Autowired
    public ModifyService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public Optional<User> modifyInfo(String id, ModifyForm modifyForm){
        //로그인한 상태. 회원정보는 비번, 닉네임만 바꿀 수 있음
        //userForm에 프론트에서 id는 로그인한 계정 id를 넣어주고,
        //비번, 닉네임은 변경된 내용이 userForm에 들어있음
        //비번, 닉네임 정보가 제대로 들어왔는지 확인해야 함.

        Optional<User> user = userRepository.findByUserid(id);
        user.ifPresent(u -> {
            if(modifyForm.getUserpassword().isBlank() || modifyForm.getUsernickName().isBlank()){
                throw new IllegalStateException("비밀번호와 별명을 반드시 입력하세요.");
            }
            u.setUserpassword(modifyForm.getUserpassword());
            u.setUsernickname(modifyForm.getUsernickName());
            userRepository.save(u);
        });
        return user;
    }
}
