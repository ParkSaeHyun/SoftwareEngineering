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

    @PostMapping("/api/trashbin/remove/")
    public Cloth trashbinRemove(@RequestBody Long clothId){
        return trashbinService.trashbinRemove(clothId).get();
        //deleteBy 메소드는 리턴값이 void
    }
    @PostMapping("/api/trashbin/restore/")
    public Cloth trashbinRestore(@RequestBody Long clothId){
        return trashbinService.trashbinRestore(clothId).get();
    }
}
