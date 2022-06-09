package com.oncloth.onclothproject.controller;

import com.oncloth.onclothproject.dto.CategoryDto;
import com.oncloth.onclothproject.model.Cloth;
import com.oncloth.onclothproject.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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

    @GetMapping("/api/customcategory/")
    public List<Cloth> customCategoryRead(@RequestBody CategoryDto categoryDto) {
        List<Cloth> clothList = categoryService.customCategoryRead(categoryDto);
        return clothList;
    }
}
