package com.oncloth.onclothproject.controller;

import com.oncloth.onclothproject.model.Cloth;
import com.oncloth.onclothproject.service.ClothSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Controller
public class ClothSearchController {
    private final ClothSearchService clothSearchService;

    @Autowired
    public ClothSearchController(ClothSearchService clothSearchService) {
        this.clothSearchService = clothSearchService;
    }

    @PostMapping("/api/search/")
    public List<Cloth> clothSearch(@RequestBody String keyword) {
        List<Cloth> clothList = clothSearchService.clothSearch(keyword);
        return clothList;
    }
}
