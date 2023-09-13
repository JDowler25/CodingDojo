// Pair Programmed w/ Carter

package com.jaydandowler.dojos_and_ninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.jaydandowler.dojos_and_ninjas.models.Ninja;
import com.jaydandowler.dojos_and_ninjas.repositories.NinjaRepository;

@Service
public class NinjaService {
    private final NinjaRepository ninjaRepository;

    public NinjaService(NinjaRepository ninjaRepository) {
        this.ninjaRepository = ninjaRepository;
    }

    // returns all the Ninjas
    public List<Ninja> allNinjas() {
        return ninjaRepository.findAll();
    }

    // creates a Ninja
    public Ninja createNinja(Ninja n) {
        return ninjaRepository.save(n);
    }

    // retrieves a Ninja
    public Ninja findNinja(Long id) {
        Optional<Ninja> optionalNinja = ninjaRepository.findById(id);
        if(optionalNinja.isPresent()) {
            return optionalNinja.get();
        } else {
            return null;
        }
    }

    // updates a Ninja
    public Ninja updateNinja(Ninja ninja) {
        ninjaRepository.save(ninja);
        return ninja;
    }

    // deletes a Ninja
    public void deleteNinja(Long id) {
        ninjaRepository.deleteById(id);
    }
}
