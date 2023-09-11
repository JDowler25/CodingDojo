// Pair programmed with Jayden

package com.jaydandowler.burger_tracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jaydandowler.burger_tracker.models.Burger;
import com.jaydandowler.burger_tracker.services.BurgerService;

@Controller
public class BurgerController {
    
    private final BurgerService burgerService;

    @Autowired
    public BurgerController(BurgerService burgerService) {
        this.burgerService = burgerService;
    }

    @RequestMapping("/burgers")
    public String index(Model model) {
        List<Burger> books = burgerService.allBurgers();
        model.addAttribute("books", books);
        return "index.jsp";
    }

    @GetMapping("burgers/new")
    public String newBurger(@ModelAttribute("burger") Burger book){
        return "new.jsp";
    }

    @PostMapping("/burgers")
    public String create(
        @ModelAttribute("burgers") Burger burger) {
            burgerService.createBurger(burger);
            return "redirect:/burgers";
        }

    @GetMapping("/burgers/{id}")
    public String showBurger(@PathVariable("id") Long id, Model model) {
        Burger burger = burgerService.findBurger(id);
        model.addAttribute("burger", burger);
        return "show.jsp";
    }
}
