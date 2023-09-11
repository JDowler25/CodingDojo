// Pair programmed with Carter

package com.jaydandowler.burger_tracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.jaydandowler.burger_tracker.models.Burger;
import com.jaydandowler.burger_tracker.repositories.BurgerRepository;


@Service
public class BurgerService {
    // adding the book repository as a dependency
    private final BurgerRepository burgerRepository;
    
    public BurgerService(BurgerRepository burgerRepository) {
        this.burgerRepository = burgerRepository;
    }
    // returns all the books
    public List<Burger> allBurgers() {
        return burgerRepository.findAll();
    }
    // creates a Burger
    public Burger createBurger(Burger b) {
        return burgerRepository.save(b);
    }
    // retrieves a Burger
    public Burger findBurger(Long id) {
        Optional<Burger> optionalBurger = burgerRepository.findById(id);
        if(optionalBurger.isPresent()) {
            return optionalBurger.get();
        } else {
            return null;
        }
    }
    // updates a Burger
    public Burger updateBurger(Burger burger) {
        burgerRepository.save(burger);
        return burger;
    }
    // deletes a Burger
    public void deleteBurger(Long id) {
        burgerRepository.deleteById(id);
    }
}

