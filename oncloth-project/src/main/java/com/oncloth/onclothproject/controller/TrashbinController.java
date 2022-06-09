package com.oncloth.onclothproject.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


import com.oncloth.onclothproject.model.Cloth;
import com.oncloth.onclothproject.service.TrashbinService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;


@RestController
public class TrashbinController {
    private final TrashbinService trashbinService;

    @Autowired
    public TrashbinController(TrashbinService trashbinService) {
        this.trashbinService = trashbinService;
    }

    @GetMapping("/api/trashbin/")
    public List<Cloth> trashbinRead(){
        return trashbinService.trashbinRead();
    }

    @PostMapping("/api/trashbin/remove/{id}")
    public String trashbinRemove(@PathVariable("id") Long clothId){
        trashbinService.trashbinRemove(clothId);
        return "영구삭제 성공!";
    }
    @PostMapping("/api/trashbin/restore/{id}")
    public Cloth trashbinRestore(@PathVariable("id") Long clothId){
        return trashbinService.trashbinRestore(clothId).get();
    }
}
