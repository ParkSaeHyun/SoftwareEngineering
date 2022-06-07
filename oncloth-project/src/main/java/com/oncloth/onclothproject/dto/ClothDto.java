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
    private String image;
    private String location;
    private String description;
    private boolean trashbin;

    @Builder
    public ClothDto(Long id, String seasonCategory, String partCategory, String customCategory, String image, String location, String description, boolean trashBin){
        this.id = id;
        this.seasoncategory = seasoncategory;
        this.partcategory = partcategory;
        this.customcategory = customcategory;
        this.image = image;
        this.location = location;
        this.description = description;
        this.trashbin = trashbin;
    }
}
