package com.oncloth.onclothproject.service;

import com.oncloth.onclothproject.model.Cloth;
import com.oncloth.onclothproject.model.CustomCategory;
import com.oncloth.onclothproject.repository.ClothRepository;
import com.oncloth.onclothproject.repository.CustomCategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    private final ClothRepository clothRepository;
    private final CustomCategoryRepository customCategoryRepository;

    public CategoryService(ClothRepository clothRepository, CustomCategoryRepository customCategoryRepository) {
        this.clothRepository = clothRepository;
        this.customCategoryRepository = customCategoryRepository;
    }

    public List<Cloth> mainCategoryRead(String season) {
        List<Cloth> clothList = clothRepository.findBySeasoncategoryAndTrashbin(season, false);
        return clothList;
    }

    public CustomCategory createCustomCategory(String name) {
        CustomCategory customCategory = new CustomCategory();
        customCategory.setName(name);
        customCategoryRepository.save(customCategory);
        return customCategory;
    }

    public List<Cloth> customCategoryRead(Long id) {
        Optional<CustomCategory> customCategory = customCategoryRepository.findById(id);
        List<Cloth> clothList = clothRepository.
                findByCustomcategoryAndTrashbin(customCategory.get().getName(), false);
        return clothList;
    }

}
