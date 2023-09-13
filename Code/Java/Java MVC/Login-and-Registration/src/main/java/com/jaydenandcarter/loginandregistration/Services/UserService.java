// Pair Programmed w/ Carter

package com.jaydenandcarter.loginandregistration.Services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.jaydenandcarter.loginandregistration.Models.LoginUser;
import com.jaydenandcarter.loginandregistration.Models.User;
import com.jaydenandcarter.loginandregistration.Repositories.UserRepository;
    
@Service
public class UserService {
    
    @Autowired
    UserRepository userRepository;
    
    // TO-DO: Write register and login methods!
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
    public User login(LoginUser newLoginObject, BindingResult result) {
    	Optional<User> user = userRepository.findByEmail(newLoginObject.getEmail());
    	if(!user.isPresent()) {
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