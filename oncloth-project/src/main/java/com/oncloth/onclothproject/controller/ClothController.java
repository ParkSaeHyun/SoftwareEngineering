//package com.oncloth.onclothproject.controller;
//
//
//import com.oncloth.onclothproject.model.Cloth;
//import com.oncloth.onclothproject.service.ClothService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.RequestBody;
//
//import java.util.List;
//
////@Controller
//public class ClothController {
//    private final ClothService clothService;
//    //@Autowired
//    public ClothController(ClothService clothService){
//        this.clothService = clothService;
//    }
//
//    public Long create(@RequestBody Cloth cloth){
//        return clothService.add(cloth);
//    }
//
//    //옷 상세조회
//    public Cloth read(@RequestBody Long id){
//        return clothService.check(id);
//    }
//    //옷 수정페이지에서 수정확인 버튼 클릭
//    //model ModifyClothForm
//    public Cloth update(@RequestBody ModifyClothForm modifyClothForm){
//        return clothService.modify(modifyClothForm);
//    }
//    //옷 상세페이지에서 삭제버튼 클릭
//    //헌옷수거함 이동
//    public Cloth delete(@RequestBody Long id){
//        return clothService.delete(id);
//    }
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
//}
