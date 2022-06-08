package com.oncloth.onclothproject.controller;

import com.oncloth.onclothproject.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SearchController {
    private final SearchService searchService;

    @Autowired
    public SearchController(SearchService searchService){
        this.searchService = searchService;
    }

    @PostMapping("/api/findmypw/")
    public String searchPw(@RequestBody String id){
        return searchService.foundPw(id);
    }
}
