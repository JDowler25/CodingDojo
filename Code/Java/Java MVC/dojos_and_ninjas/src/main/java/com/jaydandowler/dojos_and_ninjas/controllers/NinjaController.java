// Pair Programmed w/ Carter
package com.jaydandowler.dojos_and_ninjas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.jaydandowler.dojos_and_ninjas.models.Dojo;
import com.jaydandowler.dojos_and_ninjas.models.Ninja;
import com.jaydandowler.dojos_and_ninjas.services.DojoService;
import com.jaydandowler.dojos_and_ninjas.services.NinjaService;
import jakarta.validation.Valid;

@Controller
public class NinjaController {
    @Autowired
    DojoService dojoService;

    @Autowired
    NinjaService ninjaService;

    @GetMapping("/")
    public String index(Model model) {
        return "index.jsp";
    }

    @GetMapping("/dojos/new")
    public String newDojo(@ModelAttribute("dojo") Dojo dojo, Model model) {
        return "NewDojo.jsp";
    }

    @PostMapping("/dojos/create")
    public String createDojo(@Valid @ModelAttribute Dojo dojo, BindingResult result) {
        if (result.hasErrors()) {
            return "NewDojo.jsp";
        } else {
            dojoService.createDojo(dojo);
            return "redirect:/dojos/new";
        }
    }

    @GetMapping("/ninjas/new")
    public String newNinja(@ModelAttribute("ninja") Ninja ninja, Dojo dojo, Model model) {
        List<Dojo> dojos = dojoService.allDojos();
        Long exampleId = (long) 3;
        Dojo exampleDojo = dojoService.findDojo(exampleId);
        model.addAttribute("dojos", dojos);
        model.addAttribute("dojo", exampleDojo);
        return "NewNinja.jsp";
    }

    @PostMapping("/ninjas/create")
    public String createNinja(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result) {
        if (result.hasErrors()) {
            return "NewNinja.jsp";
        } else {
            ninjaService.createNinja(ninja);
            return "redirect:/";
        }
    }

    @GetMapping("/dojos/{id}")
    public String newDojo(@PathVariable("id") Long id, Model model) {
        model.addAttribute("dojo", dojoService.findDojo(id));
        return "Show.jsp";
    }
}
