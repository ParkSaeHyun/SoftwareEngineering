package com.oncloth.onclothproject.model;

import com.oncloth.onclothproject.dto.UserDto;
import lombok.*;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
public class User {

    @Id
    private String userid;
    private String userpassword;
    private String usernickname;

    @Builder
    public User(UserDto userDto){
        this.userid=userDto.getUserid();
        this.userpassword=userDto.getUserpassword();
        this.usernickname=userDto.getUsernickname();
    }

}
