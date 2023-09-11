// Pair programmed with Carter

package com.jaydandowler.burger_tracker.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jaydandowler.burger_tracker.models.Burger;
import com.jaydandowler.burger_tracker.services.BurgerService;

import jakarta.validation.Valid;

@Controller
public class BurgerController {
    
    private final BurgerService burgerService;

    public BurgerController(BurgerService burgerService) {
        this.burgerService = burgerService;
    }

    @RequestMapping("/burgers")
    public String index(@ModelAttribute("burger")Burger burger, Model model) {
        List<Burger> burgers = burgerService.allBurgers();
        model.addAttribute("burgers", burgers);
        return "index.jsp";
    }

    @PostMapping("/burgers/new")
    public String create(
        @Valid @ModelAttribute("burger") Burger burger, BindingResult result, Model model) {
            if (result.hasErrors()) {
                model.addAttribute("burgers", burgerService.allBurgers());
                return "index.jsp";
            } else {
                burgerService.createBurger(burger);
                return "redirect:/burgers";
            }
        }

    // @GetMapping("/burgers/{id}")
    // public String showBurger(@PathVariable("id") Long id, Model model) {
    //     Burger burger = burgerService.findBurger(id);
    //     model.addAttribute("burger", burger);
    //     return "show.jsp";
    // }
}
