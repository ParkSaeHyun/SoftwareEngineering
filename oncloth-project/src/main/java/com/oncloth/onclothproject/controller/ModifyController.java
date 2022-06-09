package com.oncloth.onclothproject.controller;

import com.oncloth.onclothproject.model.ModifyForm;
import com.oncloth.onclothproject.model.User;
import com.oncloth.onclothproject.service.ModifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
@RestController
public class ModifyController {
    private final ModifyService modifyService;

    @Autowired
    public ModifyController(ModifyService modifyService){
        this.modifyService = modifyService;
    }

    @PostMapping("/api/editUser/{userid}") //로그인이 된 상태의 id를 어떤 방법으로 받을지 생각해야 함.
    public User modifyInfo(@PathVariable("userid") String userid, @RequestBody ModifyForm modifyForm){
        Optional<User> optionalUser = modifyService.modifyInfo(userid, modifyForm);
        return optionalUser.get();
    }
}
