// Pair programmed w/ Carter
package com.safetravels.safe_travels.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.safetravels.safe_travels.models.SafeTravel;
import com.safetravels.safe_travels.services.SafeTravelService;

import jakarta.validation.Valid;

@Controller
public class SafeTravelController {

    private final SafeTravelService safeTravelService;

    public SafeTravelController(SafeTravelService safeTravelService) {
        this.safeTravelService = safeTravelService;
    }

    @RequestMapping("/")
    public String index(@ModelAttribute("safeTravel") SafeTravel safeTravel, Model model) {
        List<SafeTravel> safeTravels = safeTravelService.allSafeTravel();
        model.addAttribute("safeTravels", safeTravels);
        return "index.jsp";
    }
    

    @PostMapping("/safetravels/new")
    public String create(
            @Valid @ModelAttribute("safetravel") SafeTravel safeTravel, BindingResult result, Model model) {
        if (result.hasErrors()) {
            model.addAttribute("safeTravels", safeTravelService.allSafeTravel());
            return "index.jsp";
        } else {
            safeTravelService.createSafeTravel(safeTravel);
            return "redirect:/";
        }
    }

    @RequestMapping("/safetravels/{id}/edit")
    public String edit(@PathVariable("id") Long id, Model model) {
        SafeTravel safeTravel = safeTravelService.findSafeTravel(id);
        model.addAttribute("safeTravel", safeTravel);
        return "edit.jsp";
    }

    @RequestMapping(value = "/safetravels/{id}", method = RequestMethod.PUT)
    public String update(@Valid @ModelAttribute("safeTravel") SafeTravel safeTravel, BindingResult result,
            Model model) {
        if (result.hasErrors()) {
            model.addAttribute("safeTravel", safeTravel);
            return "/edit.jsp";
        } else {
            safeTravelService.updateSafeTravel(safeTravel);
            return "redirect:/";
        }
    }

    @DeleteMapping("/safetravels/{id}")
    public String destroy(@PathVariable("id") Long id) {
        safeTravelService.deleteSafeTravel(id);
        return "redirect:/";
    }

    @GetMapping("/safetravels/{id}")
    public String showSafeTravel(@PathVariable("id") Long id, Model model) {
        SafeTravel safeTravel = safeTravelService.findSafeTravel(id);
        model.addAttribute("safeTravel", safeTravel);
        return "show.jsp";
    }
}
