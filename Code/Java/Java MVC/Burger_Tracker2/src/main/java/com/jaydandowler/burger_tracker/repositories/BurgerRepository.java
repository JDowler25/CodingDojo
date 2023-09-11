// Pair programmed with Carter

package com.jaydandowler.burger_tracker.repositories;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.jaydandowler.burger_tracker.models.Burger;

@Repository
public interface BurgerRepository extends CrudRepository<Burger, Long> {
            // this method retrieves all the books from the database
            List<Burger> findAll();

}
