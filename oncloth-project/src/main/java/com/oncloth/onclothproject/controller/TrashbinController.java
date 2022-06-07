//package com.oncloth.onclothproject.controller;
//import com.oncloth.onclothproject.model.Cloth;
//import com.oncloth.onclothproject.service.TrashbinService;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//
//import java.util.List;
//
//
//@Controller
//public class TrashbinController {
//    private final TrashbinService trashbinService;
//
//    public TrashbinController(TrashbinService trashbinService) {
//        this.trashbinService = trashbinService;
//    }
//
//    @GetMapping("/trashbin")
//    public List<Cloth> trashbinRead(){
//        return trashbinService.trashbinRead();
//    }
//
//    public Cloth trashbinRemove(@RequestBody Long clothId){
//        return trashbinService.trashbinRemove(clothId);
//    }
//    public Cloth trashbinRestore(@RequestBody Long clothId){
//        return trashbinService.trashbinRestore(clothId);
//    }
//}
