package com.oncloth.onclothproject.controller;

import com.oncloth.onclothproject.dto.ClothDto;
import com.oncloth.onclothproject.dto.CustomCategoryDto;
import com.oncloth.onclothproject.model.Cloth;
import com.oncloth.onclothproject.model.CustomCategory;
import com.oncloth.onclothproject.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryController {
    private final CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("/api/category/{season}")
    public List<Cloth> readSpring(@PathVariable("season") String season) {
        List<Cloth> clothList = categoryService.mainCategoryRead(season);
        return clothList;
    }

    @PostMapping("/api/customcategory/create/")
    public CustomCategory createCustomCategory(@RequestBody CustomCategoryDto customCategoryDto) {
        return categoryService.createCustomCategory(customCategoryDto.getName());
    }

    @PostMapping("/api/customcategory/remove/")
    public CustomCategory removeCustomCategory(@RequestBody CustomCategoryDto customCategoryDto) {
        return categoryService.delete(customCategoryDto);
    }

    @PostMapping("/api/customcategory/update/")
    public CustomCategory updateCustomCategory(@RequestBody CustomCategoryDto customCategoryDto) {
        return updateCustomCategory(customCategoryDto);
    }

    @GetMapping("/api/customcategory/")
    public List<Cloth> customCategoryRead(@RequestParam Long id) {
        List<Cloth> clothList = categoryService.customCategoryRead(id);
        return clothList;
    }
}
