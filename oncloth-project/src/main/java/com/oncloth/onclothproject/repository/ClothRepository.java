package com.oncloth.onclothproject.repository;

import com.oncloth.onclothproject.model.Cloth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClothRepository extends JpaRepository<Cloth,Long> {
    //TrashbinService 에서 Read()에 사용
    public List<Cloth> findByTrashbin(Boolean trashbin);

    //clothSearch()에 사용
    public List<Cloth> findByDescriptionLike(String keyword);

    public List<Cloth> findBySeasoncategory(String season);

    public List<Cloth> findByCustomcategory(String custom);
}
