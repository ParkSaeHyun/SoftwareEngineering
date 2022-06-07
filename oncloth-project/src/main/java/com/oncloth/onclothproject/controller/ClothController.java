package com.oncloth.onclothproject.controller;


import com.oncloth.onclothproject.dto.ClothDto;
import com.oncloth.onclothproject.model.Cloth;
import com.oncloth.onclothproject.service.ClothService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Controller
public class ClothController {

    @Autowired
    private ClothService clothService;


    //의류 객체 생성, class diagram *must modify
    @PostMapping("api/cloth/create")
    public void create(ClothDto clothDto, @RequestParam("file") MultipartFile file) throws Exception {
        clothService.create(clothDto,file);
    }


    //옷 상세조회, class diagram *must modify
    @GetMapping("api/cloth/read/{id}")
    public Optional<Cloth> read(@PathVariable("id") Long id){
        //아이디로 찾은 객체 전달
        return clothService.read(id);
    }
    //옷 수정페이지에서 수정확인 버튼 클릭
    //class diagram *must modify
    @PostMapping("api/cloth/modify/{id}")
    public Optional<Cloth> update(@PathVariable("id") Long id,ClothDto clothDto, @RequestParam("file") MultipartFile file){
        return clothService.update(id, clothDto,file);
    }

    //옷 상세페이지에서 삭제버튼 클릭
    //헌옷수거함 이동 class diagram *must modify
    @GetMapping("api/cloth/delete/{id}")
    public void delete(@PathVariable("id") Long id){
        clothService.delete(id);
    }
//
//    //옷 검색 기능(메인화면에서)
//    public List<Cloth> clothSearch(@RequestBody String keyword){
//        return clothService.clothSearch(keyword);
//    }
//    //MainCategoryForm 에는
//    //String season
//    //String part
//
//    public List<Cloth> mainCategoryRead(@RequestBody MainCategoryForm mainCategoryForm){
//        return clothService.mainCategoryRead(mainCategoryForm);
//    }
//
//    //파라미터 이름 바꿔도 됨
//    public List<Cloth> customCategoryRead(@RequestBody String customCategoryName){
//        return clothService.customCategoryRead(customCategoryName);
//    }
}
