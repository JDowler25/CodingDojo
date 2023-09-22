package com.jaydandowler.propfolio.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jaydandowler.propfolio.models.Property;
import com.jaydandowler.propfolio.repositories.PropertyRepository;
import com.jaydandowler.propfolio.services.PropertyService;

import jakarta.validation.Valid;



@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", allowCredentials = "true")
@RequestMapping("/api")
public class ProjectApi {

    @Autowired
    private PropertyService propertyService;

    @Autowired
    private PropertyRepository propertyRepository;
    
    @GetMapping("/properties")
    public ResponseEntity<Object> getAllProperties() {
        return ResponseEntity.ok().body(propertyService.allProperties());
    }
    
    @PostMapping("/properties/create")
    public ResponseEntity<Object> createProperty(@Valid @RequestBody Property property, BindingResult result){
        if(result.hasErrors()){
            System.out.println(result.getAllErrors());
            return ResponseEntity.status(400).body(result.getAllErrors());
        }
        Property savedProperty = propertyRepository.save(property);
        return ResponseEntity.ok().body(savedProperty);
    }
    
    
    @DeleteMapping("/properties/delete/{id}")
    public ResponseEntity<Object> deleteProperty(@PathVariable("id") Long id) {
        propertyService.deleteProperty(id);
        return ResponseEntity.ok().build();
    }



    @PutMapping("/properties/update/{id}")
    public ResponseEntity<Object> updateProperty(@PathVariable("id") Long id, @Valid @RequestBody Property property, BindingResult result) {
        if(result.hasErrors()){ 
            return ResponseEntity.status(400).body(result.getAllErrors());
        }
        return "redirect:/";
    }
}
