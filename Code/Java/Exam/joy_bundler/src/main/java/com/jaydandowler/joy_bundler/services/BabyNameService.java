package com.jaydandowler.joy_bundler.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.jaydandowler.joy_bundler.models.BabyName;
import com.jaydandowler.joy_bundler.repositories.BabyNameRepository;

@Service
public class BabyNameService {

    private final BabyNameRepository babyNameRepository;

    public BabyNameService(BabyNameRepository babyNameRepository) {
        this.babyNameRepository = babyNameRepository;
    }

    // returns all the baby names
    public List<BabyName> allBabyNames() {
        return babyNameRepository.findAll();
    }

    // creates a baby name
    public BabyName createBabyName(BabyName name) {
        return babyNameRepository.save(name);
    }

    // retrieves a baby name
    public BabyName findBabyName(Long id) {
        Optional<BabyName> optionalBabyName = babyNameRepository.findById(id);
        if (optionalBabyName.isPresent()) {
            return optionalBabyName.get();
        } else {
            return null;
        }
    }

    // updates a baby name
    public BabyName updateBabyName(BabyName babyName) {
        babyNameRepository.save(babyName);
        return babyName;
    }

    // deletes a baby name
    public void deleteBabyName(Long id) {
        babyNameRepository.deleteById(id);
    }

}
