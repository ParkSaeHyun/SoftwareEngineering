package com.oncloth.onclothproject.service;

import com.oncloth.onclothproject.dto.ClothDto;
import com.oncloth.onclothproject.model.Cloth;
import com.oncloth.onclothproject.model.ModifyForm;
import com.oncloth.onclothproject.repository.ClothRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ClothService {

    @Autowired
    private ClothRepository clothRepository;

    public void create(ClothDto clothDto,MultipartFile file) throws Exception{

        UUID uuid = UUID.randomUUID();
        String filename = uuid + "_" + file.getOriginalFilename();

        String projectPath = System.getProperty("user.dir") + "/src/main/resources/static/files";
        File saveFile = new File(projectPath,filename);

        clothDto.setImagename(filename);
        clothDto.setImagepath("/files/"+filename);
        clothDto.setTrashbin(false);

        file.transferTo(saveFile);

        clothRepository.save(new Cloth(clothDto));
    }

    public Optional<Cloth> read(Long id){
        Optional<Cloth> savedCloth = clothRepository.findById(id);
        return savedCloth;
    }
    public Optional<Cloth> update(Long id,ClothDto clothDto,MultipartFile file){
        Optional<Cloth> originalcloth = clothRepository.findById(id);

        //create new image info
        UUID uuid = UUID.randomUUID();
        String filename = uuid + "_" + file.getOriginalFilename();

        String projectPath = System.getProperty("user.dir") + "/src/main/resources/static/files";
        File saveFile = new File(projectPath,filename);

        //modify new to original
        originalcloth.ifPresent(u -> {
            u.setSeasoncategory(clothDto.getSeasoncategory());
            u.setPartcategory(clothDto.getPartcategory());
            u.setCustomcategory(clothDto.getCustomcategory());
            u.setLocation(clothDto.getLocation());
            u.setDescription(clothDto.getDescription());
            u.setImagename(filename);
            u.setImagepath("/files/"+filename);
            clothRepository.save(u);
        });

        return originalcloth;
    }
    public void delete(Long id){
        Optional<Cloth> originalcloth = clothRepository.findById(id);
        originalcloth.ifPresent(o->{
            o.setTrashbin(true);
        });
    };

}