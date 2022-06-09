package com.oncloth.onclothproject.service;

import com.oncloth.onclothproject.model.Cloth;
import com.oncloth.onclothproject.repository.ClothRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClothSearchService {
    private final ClothRepository clothRepository;

    public ClothSearchService(ClothRepository clothRepository) {
        this.clothRepository = clothRepository;
    }

    public List<Cloth> clothSearch(String keyword) {
        List<Cloth> clothList = clothRepository.findByDescriptionLikeAndTrashbin(keyword, false);
        return clothList;
    }
}
