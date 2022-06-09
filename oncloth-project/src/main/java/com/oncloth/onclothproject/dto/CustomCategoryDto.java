package com.oncloth.onclothproject.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomCategoryDto {
    private Long id;

    @Builder
    public CustomCategoryDto(Long id) {
        this.id = id;
    }
}
