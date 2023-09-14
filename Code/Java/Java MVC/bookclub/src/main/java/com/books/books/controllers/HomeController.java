// Pair programmed with Carter

package com.books.books.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.books.books.models.Book;
import com.books.books.models.LoginUser;
import com.books.books.models.User;
import com.books.books.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class HomeController {
    
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
   
       return "redirect:/books";
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
   
       return "redirect:/books";
   }
   
   @GetMapping("/logout")
   public String logout(HttpSession session) {
   	session.invalidate();
   	return "redirect:/";
   }
   
}
   