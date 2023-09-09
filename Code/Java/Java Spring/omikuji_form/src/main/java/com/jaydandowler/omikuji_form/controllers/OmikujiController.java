package com.jaydandowler.omikuji_form.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import jakarta.servlet.http.HttpSession;

@Controller
public class OmikujiController {

    @GetMapping("/")
    public String index() {
        return "index.jsp";
    }

    @PostMapping("/handleForm")
    public String handleForm(
    int number, 
    String city, 
    String person, 
    String profession, 
    String livingThing, 
    String message, 
    HttpSession session) {
        session.setAttribute("number", number);
        session.setAttribute("city", city);
        session.setAttribute("person", person);
        session.setAttribute("profession", profession);
        session.setAttribute("livingThing", livingThing);
        session.setAttribute("message", message);
        return "redirect:/show";
    }

    @GetMapping("/show")
    public String show(){
        return "show.jsp";
    }
}
