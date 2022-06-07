package com.oncloth.onclothproject.repository;

import com.oncloth.onclothproject.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,String> {
    public Optional<User> findByUserid(String userid);
}
