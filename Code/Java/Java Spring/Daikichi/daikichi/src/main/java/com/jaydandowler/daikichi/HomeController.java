package com.jaydandowler.daikichi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    
    @GetMapping("/var/")
    public String var(String name){
        System.out.println(name);
        return String.format("Welcome back %s!", name);
    }


}
