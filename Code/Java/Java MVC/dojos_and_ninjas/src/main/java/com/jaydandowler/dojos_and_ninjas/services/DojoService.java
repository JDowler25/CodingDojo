// Pair Programmed w/ Carter

package com.jaydandowler.dojos_and_ninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.jaydandowler.dojos_and_ninjas.models.Dojo;
import com.jaydandowler.dojos_and_ninjas.repositories.DojoRepository;

@Service
public class DojoService {
    private final DojoRepository dojoRepository;

    public DojoService(DojoRepository dojoRepository) {
        this.dojoRepository = dojoRepository;
    }

    // returns all the Ninjas
    public List<Dojo> allDojos() {
        return dojoRepository.findAll();
    }

    // creates a Ninja
    public Dojo createDojo(Dojo d) {
        return dojoRepository.save(d);
    }

    // retrieves a Ninja
    public Dojo findDojo(Long id) {
        Optional<Dojo> optionalDojo = dojoRepository.findById(id);
        if(optionalDojo.isPresent()) {
            return optionalDojo.get();
        } else {
            return null;
        }
    }

    // updates a Ninja
    public Dojo updateDojo(Dojo dojo) {
        dojoRepository.save(dojo);
        return dojo;
    }

    // deletes a Ninja
    public void deleteDojo(Long id) {
        dojoRepository.deleteById(id);
    }
}
