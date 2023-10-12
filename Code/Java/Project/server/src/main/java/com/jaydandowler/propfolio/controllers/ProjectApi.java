package com.jaydandowler.propfolio.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.jaydandowler.propfolio.models.LoginUser;
import com.jaydandowler.propfolio.models.Property;
import com.jaydandowler.propfolio.models.User;
import com.jaydandowler.propfolio.services.PropertyService;
import com.jaydandowler.propfolio.services.UserService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", allowCredentials = "true")
@RequestMapping("/api")
public class ProjectApi {

    @Autowired
    private PropertyService propertyService;

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public ResponseEntity<Object> getAllUsers() {
        return ResponseEntity.ok().body(userService.allUsers());
    }

    @PostMapping("/register")
    public ResponseEntity<Object> registerUser(@Valid @RequestBody User user, BindingResult result) {
        System.out.println(user);
        if (result.hasErrors()) {
            System.out.println(result.getAllErrors());
            return ResponseEntity.status(400).body(result.getAllErrors());
        }
        User savedUser = userService.register(user, result);
        return ResponseEntity.ok().body(savedUser);
    }

    @PostMapping("/login")
    public ResponseEntity<Object> login(@Valid @RequestBody LoginUser newLogin, BindingResult result) {
        System.out.println(newLogin);
        if (result.hasErrors()) {
            System.out.println(result.getAllErrors());
            return ResponseEntity.status(400).body(result.getAllErrors());
        }
        User savedLoginUser = userService.login(newLogin, result);
        return ResponseEntity.ok().body(savedLoginUser);
    }

    @GetMapping("/properties")
    public ResponseEntity<Object> getAllProperties() {
        return ResponseEntity.ok().body(propertyService.allProperties());
    }

    @PostMapping("/properties/create")
    public ResponseEntity<Object> createProperty(@Valid @RequestBody Property property, BindingResult result) {
        // Logging the received Property object and isRented value
        System.out.println("Received Property object: " + property);
        System.out.println("isRented value: " + property.isIsRented());

        if (result.hasErrors()) {
            System.out.println(result.getAllErrors());
            return ResponseEntity.status(400).body(result.getAllErrors());
        }
        Property savedProperty = propertyService.createProperty(property);
        return ResponseEntity.ok().body(savedProperty);
    }

    @DeleteMapping("/properties/delete/{id}")
    public ResponseEntity<Object> deleteProperty(@PathVariable("id") Long id) {
        propertyService.deleteProperty(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/properties/update/{id}")
    public ResponseEntity<Object> updateProperty(@PathVariable("id") Long id, @Valid @RequestBody Property property,
            BindingResult result) {
        System.out.println("Received Property object: " + property);
        if (result.hasErrors()) {
            System.out.println(result.getAllErrors());
            return ResponseEntity.status(400).body(result.getAllErrors());
        }
        Property savedProperty = propertyService.updateProperty(id, property);
        return ResponseEntity.ok().body(savedProperty);
    }

    @GetMapping("/properties/{id}")
    public ResponseEntity<Object> getProperty(@PathVariable String id) {
        System.out.println("Received ID: " + id); // Log the received ID

        try {
            Long validId = Long.parseLong(id); // Attempt to parse the ID as Long
            return ResponseEntity.ok().body(propertyService.findProperty(validId)); // Proceed if successful
        } catch (NumberFormatException e) {
            // Handle the error if ID is not a valid number
            System.err.println("Invalid ID received: " + id);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid ID"); // Return error response
        }
    }

}
