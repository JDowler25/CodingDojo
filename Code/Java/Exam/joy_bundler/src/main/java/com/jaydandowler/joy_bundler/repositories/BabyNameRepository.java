package com.jaydandowler.joy_bundler.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.jaydandowler.joy_bundler.models.BabyName;

@Repository
public interface BabyNameRepository extends CrudRepository<BabyName, Long>{
            // this method retrieves all the books from the database
            List<BabyName> findAll();
            // this method counts how many titles contain a certain string
            Long countByNameContaining(String search);
            // this method deletes a name that starts with a specific BabyName
            Long deleteByNameStartingWith(String search);
}
