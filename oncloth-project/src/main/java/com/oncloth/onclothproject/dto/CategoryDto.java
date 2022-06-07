package com.oncloth.onclothproject.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoryDto {
    private String season;
    private String part;
    private String custom;

    @Builder
    public CategoryDto(String season, String part, String main) {
        this.season = season;
        this.part = part;
        this.custom = main;
    }
}
