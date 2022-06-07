package com.oncloth.onclothproject.service;

import com.oncloth.onclothproject.dto.ClothDto;
import com.oncloth.onclothproject.model.Cloth;
import com.oncloth.onclothproject.repository.ClothRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClothService {

    @Autowired
    private ClothRepository clothRepository;

    public Cloth create(ClothDto clothDto){
        Cloth cloth1 = clothRepository.save(new Cloth(clothDto));
        return cloth1;
    }

//    public Cloth check(Long id);
//    //public Cloth modify(ModifyClothForm modifyClothForm);
//    public Cloth delete(Long id);
//    public List<Cloth> clothSearch(String keyword);
//    //public List<Cloth> mainCategoryRead(MainCategoryForm mainCategoryForm);
//    public List<Cloth> customCategoryRead(String customCategoryName);
}