package com.oncloth.onclothproject.model;

import com.oncloth.onclothproject.dto.ClothDto;
import com.oncloth.onclothproject.dto.UserDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "cloth")
public class Cloth {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    //필수입력
    private String seasoncategory;
    private String partcategory;
    //옵션(modify할때 isBlank() 확인 안해도 됨)
    private String customcategory;
    private String image;
    private String location;
    //필수입력
    private String description;
    private boolean trashbin;

    @Builder
    public Cloth(ClothDto clothDto){
        this.id=clothDto.getId();
        this.seasoncategory=clothDto.getSeasoncategory();
        this.partcategory=clothDto.getPartcategory();
        this.customcategory=clothDto.getCustomcategory();
        this.image=clothDto.getImage();
        this.location=clothDto.getLocation();
        this.description=clothDto.getDescription();
        this.trashbin=clothDto.isTrashbin();
    }
}
