package com.oncloth.onclothproject.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ClothDto {

    private Long id;
    private String seasoncategory;
    private String partcategory;
    private String customcategory;
    private String imagename;
    private String imagepath;
    private String location;
    private String description;
    private boolean trashbin;

    @Builder
    public ClothDto(Long id, String seasoncategory, String partcategory, String customcategory, String imagename, String imagepath, String location, String description, boolean trashbin){
        this.id = id;
        this.seasoncategory = seasoncategory;
        this.partcategory = partcategory;
        this.customcategory = customcategory;
        this.imagename = imagename;
        this.imagepath = imagepath;
        this.location = location;
        this.description = description;
        this.trashbin = trashbin;
    }
}
