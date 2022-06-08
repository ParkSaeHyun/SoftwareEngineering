package com.oncloth.onclothproject.service;

import com.oncloth.onclothproject.model.Cloth;
import com.oncloth.onclothproject.repository.ClothRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class TrashbinService {
    private final ClothRepository clothRepository;

    @Autowired
    public TrashbinService(ClothRepository clothRepository) {
        this.clothRepository = clothRepository;
    }

    public List<Cloth> trashbinRead(){
        clothRepository.findByTrashbin(true).forEach(cloth -> {
            log.info(cloth.getDescription());
        });
        return clothRepository.findByTrashbin(true);

    };
    public Optional<Cloth> trashbinRemove(Long clothId){
        Optional<Cloth> optionalCloth = clothRepository.findById(clothId);
        optionalCloth.ifPresent(cloth -> {
            clothRepository.deleteById(clothId);
        });
        return optionalCloth;
    };
    public Optional<Cloth> trashbinRestore(Long clothId){
        Optional<Cloth> optionalCloth = clothRepository.findById(clothId);
        optionalCloth.ifPresent(cloth -> {
            cloth.setTrashbin(false);
            clothRepository.save(cloth);
        });
        return optionalCloth;
    };
}
