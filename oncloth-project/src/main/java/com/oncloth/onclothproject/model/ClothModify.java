package com.oncloth.onclothproject.model;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.Id;

@Getter
@Setter
public class ClothModify {

    @Id
    private Long id;
    private String seasoncategory;
    private String partcategory;
    private String customcategory;
    private String location;
    private String description;
}
