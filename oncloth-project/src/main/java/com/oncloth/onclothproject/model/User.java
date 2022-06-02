package com.oncloth.onclothproject.model;

import com.oncloth.onclothproject.dto.UserDto;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "user")
public class User {

//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer id;

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
