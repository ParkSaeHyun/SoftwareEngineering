package com.oncloth.onclothproject.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Cloth {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    //필수입력
    private String seasonCategory;
    private String partCategory;
    //옵션(modify할때 isBlank() 확인 안해도 됨)
    private String customCategory;
    private String image;
    private String location;
    //필수입력
    private String description;
    private boolean trashBin;
}
