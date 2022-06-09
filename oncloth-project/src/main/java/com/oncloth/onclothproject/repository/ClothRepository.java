package com.oncloth.onclothproject.repository;

import com.oncloth.onclothproject.model.Cloth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClothRepository extends JpaRepository<Cloth,Long> {
    //TrashbinService 에서 Read()에 사용
    public List<Cloth> findByTrashbin(Boolean trashbin);

    //ClothSearchService에 사용
    public List<Cloth> findByDescriptionLikeAndTrashbin(String keyword, boolean trashbin);

    //CategoryService에 사용
    public List<Cloth> findBySeasoncategoryAndTrashbin(String season, boolean trashbin);
    public List<Cloth> findByCustomcategoryAndTrashbin(String custom, boolean trashbin);
}
