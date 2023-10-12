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
    public Property createProperty(Property property) {
        validateRentIncome(property);
        return propertyRepository.save(property);
    }
    
    // updates a Property
    public Property updateProperty(Long id, Property updatedProperty) {
        Optional<Property> optionalProperty = propertyRepository.findById(id);
        if (optionalProperty.isPresent()) {
            Property existingProperty = optionalProperty.get();
            
            // Update fields of existingProperty with values from updatedProperty
            existingProperty.setAddress(updatedProperty.getAddress());
            existingProperty.setSqft(updatedProperty.getSqft());
            existingProperty.setBedrooms(updatedProperty.getBedrooms());
            existingProperty.setBaths(updatedProperty.getBaths());
            existingProperty.setExpenses(updatedProperty.getExpenses());
            existingProperty.setIsRented(updatedProperty.getIsRented());
            existingProperty.setRentIncome(updatedProperty.getRentIncome());
            existingProperty.setImageUrl(updatedProperty.getImageUrl());
            
            validateRentIncome(existingProperty);
            propertyRepository.save(existingProperty);
            return existingProperty;
        } else {
            return null;
        }
    }
    
    

    private void validateRentIncome(Property property) {
        if (property.isIsRented() != null && !property.isIsRented()) {
            property.setRentIncome(null); // Set rentIncome to null if rented is false
        }
    }
    
    // retrieves a Property
    public Property findProperty(Long id) {
        Optional<Property> optionalProperty = propertyRepository.findById(id);
        if (optionalProperty.isPresent()) {
            return optionalProperty.get();
        } else {
            return null;
        }
    }


    // deletes a Property
    public void deleteProperty(Long id) {
        propertyRepository.deleteById(id);
    }
}
