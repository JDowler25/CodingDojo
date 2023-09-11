package com.jaydandowler.burger_tracker.repositories;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.jaydandowler.burger_tracker.models.Burger;

@Repository
public interface BurgerRepository extends CrudRepository<Burger, Long> {
            // this method retrieves all the books from the database
            List<Burger> findAll();
            // this method finds Burgers with descriptions containing the search string
            List<Burger> findByDescriptionContaining(String search);
            // this method counts how many titles contain a certain string
            Long countByTitleContaining(String search);
            // this method deletes a Burger that starts with a specific title
            Long deleteByTitleStartingWith(String search);
}
