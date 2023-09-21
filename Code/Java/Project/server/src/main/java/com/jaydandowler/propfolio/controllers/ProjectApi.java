package com.jaydandowler.propfolio.controllers;


import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.jaydandowler.propfolio.models.Property;
import com.jaydandowler.propfolio.services.PropertyService;



@RestController
@RequestMapping("/api")
public class ProjectApi {
    private final PropertyService propertyService;
    public ProjectApi(PropertyService propertyService){
        this.propertyService = propertyService;
    }
    
    @GetMapping("/properties")
    public List<Property> getAllProperties() {
        return propertyService.allProperties();
    }
    
    @PostMapping("/properties/create")
    public String createProperty(Property property){
        propertyService.createProperty(property);
        return "redirect:/";
    }
    
    @PutMapping("/properties/update/{id}")
    public String updateProperty(Property property) {
        propertyService.updateProperty(property);
        return "redirect:/";
    }
    
    @RequestMapping(value="/properties/{id}", method=RequestMethod.DELETE)
    public void destroy(@PathVariable("id") Long id) {
        propertyService.deleteProperty(id);
    }
}
