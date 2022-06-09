package com.oncloth.onclothproject.controller;

import com.oncloth.onclothproject.model.Cloth;
import com.oncloth.onclothproject.service.ClothSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClothSearchController {
    private final ClothSearchService clothSearchService;

    @Autowired
    public ClothSearchController(ClothSearchService clothSearchService) {
        this.clothSearchService = clothSearchService;
    }

    @GetMapping("/api/search/")
    public List<Cloth> clothSearch(@RequestParam String keyword) {
        List<Cloth> clothList = clothSearchService.clothSearch(keyword);
        return clothList;
    }
}
