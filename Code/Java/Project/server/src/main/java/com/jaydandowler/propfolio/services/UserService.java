package com.jaydandowler.propfolio.services;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.jaydandowler.propfolio.models.LoginUser;
import com.jaydandowler.propfolio.models.User;
import com.jaydandowler.propfolio.repositories.UserRepository;

@Service
public class UserService {
        
    @Autowired
    UserRepository userRepository;
    
    public User register(User newUser, BindingResult result) {
        if(userRepository.findByEmail(newUser.getEmail()).isPresent()) {
        	result.rejectValue("email", "Unique", "Email is Taken");
        }
        if(!newUser.getPassword().equals(newUser.getConfirm())) {
            result.rejectValue("confirm", "Matches", "The Confirm Password must match Password!");
        }
        if(result.hasErrors()) {
        	return null;
        }
        String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
        newUser.setPassword(hashed);
        return userRepository.save(newUser);
    }
    
    public List<User> allUsers() {
        return userRepository.findAll();
    }
    
    public User findUser(Long id) {
        Optional<User> optionalUser = userRepository.findById(id);
        if(optionalUser.isPresent()) {
            return optionalUser.get();
        } else {
            return null;
        }
    }

    public User updateUser(Long id, User updateUser) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();
    
            existingUser.setEmail(updateUser.getEmail());
            existingUser.setPassword(updateUser.getPassword());
            existingUser.setUser_name(updateUser.getUser_name()); 
            userRepository.save(existingUser);
            return existingUser; 
        }
    
        return null; 
    }
    
    
    public User login(LoginUser newLoginObject, BindingResult result) {
    	Optional<User> user = userRepository.findByEmail(newLoginObject.getEmail());
    	if(user.isEmpty()) {
    		result.rejectValue("email", "loginEmail", "Email not found");
    	}
    	else if(!BCrypt.checkpw(newLoginObject.getPassword(), user.get().getPassword())) {
    	    result.rejectValue("password", "logPassword", "Invalid Password!");
    	}
        if(result.hasErrors()) {
        	return null;
        }
    	return user.get();
    }
}
