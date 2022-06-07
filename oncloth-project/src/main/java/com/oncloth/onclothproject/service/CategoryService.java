package com.oncloth.onclothproject.service;

import com.oncloth.onclothproject.dto.CategoryDto;
import com.oncloth.onclothproject.model.Cloth;
import com.oncloth.onclothproject.repository.ClothRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    private final ClothRepository clothRepository;

    public CategoryService(ClothRepository clothRepository) {
        this.clothRepository = clothRepository;
    }

    public List<Cloth> mainCategoryRead(String season) {
        List<Cloth> clothList = clothRepository.findBySeasoncategory(season);
        return clothList;
    }

    public List<Cloth> customCategoryRead(CategoryDto categoryDto) {
        List<Cloth> clothList = clothRepository.
                findByCustomcategory(categoryDto.getCustom());
        return clothList;
    }
}
