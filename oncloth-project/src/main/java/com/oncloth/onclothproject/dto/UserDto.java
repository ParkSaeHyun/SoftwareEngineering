package com.oncloth.onclothproject.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

public class UserDto {

    private String usernickname;
    private String userpassword;
    private String userid;

    public String getUsernickname() {
        return usernickname;
    }

    public void setUsernickname(String usernickname) {
        this.usernickname = usernickname;
    }

    public String getUserpassword() {
        return userpassword;
    }

    public void setUserpassword(String userpassword) {
        this.userpassword = userpassword;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }
    @Builder
    public UserDto(String userid, String userpassword, String usernickname){
        this.userid=userid;
        this.userpassword=userpassword;
        this.usernickname=usernickname;
    }

}
