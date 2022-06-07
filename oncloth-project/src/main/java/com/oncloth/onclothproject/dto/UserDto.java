package com.oncloth.onclothproject.dto;

import com.oncloth.onclothproject.model.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserDto {

    private String userid;
    private String usernickname;
    private String userpassword;

    @Builder
    public UserDto(String userid, String userpassword, String usernickname){
        this.userid=userid;
        this.userpassword=userpassword;
        this.usernickname=usernickname;
    }

}
