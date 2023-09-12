// Pair programmed with Carter

package com.safetravels.safe_travels.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.safetravels.safe_travels.models.SafeTravel;
import com.safetravels.safe_travels.repositories.SafeTravelRepository;


@Service
public class SafeTravelService {
    // adding the book repository as a dependency
    private final SafeTravelRepository safeTravelRepository;
    
    public SafeTravelService(SafeTravelRepository safeTravelRepository) {
        this.safeTravelRepository = safeTravelRepository;
    }
    // returns all the books
    public List<SafeTravel> allSafeTravel() {
        return safeTravelRepository.findAll();
    }
    // creates a SafeTravel
    public SafeTravel createSafeTravel(SafeTravel st) {
        return safeTravelRepository.save(st);
    }
    // retrieves a SafeTravel
    public SafeTravel findSafeTravel(Long id) {
        Optional<SafeTravel> optionalSafeTravel = safeTravelRepository.findById(id);
        if(optionalSafeTravel.isPresent()) {
            return optionalSafeTravel.get();
        } else {
            return null;
        }
    }
    // updates a SafeTravel
    public SafeTravel updateSafeTravel(SafeTravel safeTravel) {
        safeTravelRepository.save(safeTravel);
        return safeTravel;
    }
    // deletes a SafeTravel
    public void deleteSafeTravel(Long id) {
        safeTravelRepository.deleteById(id);
    }
}

