package com.jaydandowler.joy_bundler.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jaydandowler.joy_bundler.models.BabyName;
import com.jaydandowler.joy_bundler.services.BabyNameService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class BabyNameController {

    @Autowired
    BabyNameService babyNameService;

    @GetMapping("/home")
    public String home(HttpSession session, Model model) {
        if (session.getAttribute("userId") == null) {
            return "redirect:/";
        }
        List<BabyName> names = babyNameService.allBabyNames();
        model.addAttribute("names", names);
        return "home.jsp";
    }

    @GetMapping("/names/new")
    public String newName(@ModelAttribute("babyName") BabyName name, Model model, HttpSession session) {
        if (session.getAttribute("userId") == null) {
            return "redirect:/";
        }
        return "new.jsp";
    }

    @PostMapping("/names")
    public String createName(@Valid @ModelAttribute("babyName") BabyName name, BindingResult result, Model model) {
        if (result.hasErrors()) {
            model.addAttribute("name", name);
            return "/new.jsp";
        } else {
            babyNameService.createBabyName(name);
            return "redirect:/home";
        }
    }

    @GetMapping("/names/{id}")
    public String showName(@PathVariable("id") Long id, Model model, HttpSession session) {
        if (session.getAttribute("userId") == null) {
            return "redirect:/";
        }

        BabyName name = babyNameService.findBabyName(id);

        // Get the logged-in user ID from session and add to the model.
        Long loggedInUserId = (Long) session.getAttribute("userId");
        model.addAttribute("loggedInUserId", loggedInUserId);

        model.addAttribute("name", name);
        return "show.jsp";
    }

    @RequestMapping("/names/{id}/edit")
    public String edit(@PathVariable("id") Long id, Model model, HttpSession session) {
        if (session.getAttribute("userId") == null) {
            return "redirect:/";
        }

        BabyName name = babyNameService.findBabyName(id);

        // Get the logged-in user ID from session and add to the model.
        Long loggedInUserId = (Long) session.getAttribute("userId");
        model.addAttribute("loggedInUserId", loggedInUserId);
        model.addAttribute("name", name);
        model.addAttribute("babyName", name);
        return "edit.jsp";
    }

    @PutMapping(value = "/names/{id}")
    public String update(@Valid @ModelAttribute("babyName") BabyName name, BindingResult result,
            Model model) {
        if (result.hasErrors()) {
            model.addAttribute("name", name);
            return "/edit.jsp";
        } else {
            babyNameService.updateBabyName(name);
            return "redirect:/home";
        }
    }

    @DeleteMapping("/names/{id}/delete")
    public String delete(@PathVariable("id") Long id, Model model) {
        babyNameService.deleteBabyName(id);
        return "redirect:/home";
    }
}
