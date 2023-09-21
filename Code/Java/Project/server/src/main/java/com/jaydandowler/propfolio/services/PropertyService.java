package com.jaydandowler.propfolio.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.jaydandowler.propfolio.models.Property;
import com.jaydandowler.propfolio.repositories.PropertyRepository;

@Service
public class PropertyService {
        // adding the Property repository as a dependency
        private final PropertyRepository propertyRepository;
    
        public PropertyService(PropertyRepository propertyRepository) {
            this.propertyRepository = propertyRepository;
        }
        // returns all the Properties
        public List<Property> allProperties() {
            return propertyRepository.findAll();
        }
        // creates a Property
        public Property createProperty(Property b) {
            return propertyRepository.save(b);
        }
        // retrieves a Property
        public Property findProperty(Long id) {
            Optional<Property> optionalProperty = propertyRepository.findById(id);
            if(optionalProperty.isPresent()) {
                return optionalProperty.get();
            } else {
                return null;
            }
        }
        // updates a Property
        public Property updateProperty(Property property) {
            propertyRepository.save(property);
            return property;
        }
        // deletes a Property
        public void deleteProperty(Long id) {
            propertyRepository.deleteById(id);
        }
}
