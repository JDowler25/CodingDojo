// Pair Programmed w/ Carter
package com.jaydenandcarter.loginandregistration.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.jaydenandcarter.loginandregistration.Models.LoginUser;
import com.jaydenandcarter.loginandregistration.Models.User;
import com.jaydenandcarter.loginandregistration.Services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class HomeController {
    
    // Add once service is implemented:
     @Autowired
     UserService userService;
    
    @GetMapping("/")
    public String index(Model model) {
    
        // Bind empty User and LoginUser objects to the JSP
        // to capture the form input
        model.addAttribute("newUser", new User());
        model.addAttribute("newLogin", new LoginUser());
        return "index.jsp";
    }
    
    @PostMapping("/register")
    public String register(@Valid @ModelAttribute("newUser") User newUser, 
            BindingResult result, Model model, HttpSession session) {
        
    	User user = userService.register(newUser, result);
        
        if(result.hasErrors()) {
            // Be sure to send in the empty LoginUser before 
            // re-rendering the page.
            model.addAttribute("newLogin", new LoginUser());
            return "index.jsp";
        }

        session.setAttribute("user", user);
        session.setAttribute("userId", user.getId());
    
        return "redirect:/home";
    }
    
    @PostMapping("/login")
    public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, 
            BindingResult result, Model model, HttpSession session) {
        
         User user = userService.login(newLogin, result);
    
        if(result.hasErrors()) {
            model.addAttribute("newUser", new User());
            return "index.jsp";
        }
    
        session.setAttribute("user", user);
        session.setAttribute("userId", user.getId());
    
        return "redirect:/home";
    }
    
    @GetMapping("/home")
    public String home(HttpSession session) {
    	if(session.getAttribute("userId")==null) {
    		System.out.println(session.getAttribute("userId"));
    		return "redirect:/";
    	}
    	return "Home.jsp";
    }
    
    @GetMapping("/logout")
    public String logout(HttpSession session) {
    	session.invalidate();
    	return "redirect:/";
    }
    
}