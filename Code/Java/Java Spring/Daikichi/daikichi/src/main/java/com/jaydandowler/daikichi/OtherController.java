package com.jaydandowler.daikichi;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class OtherController {
    
    @GetMapping("/home")
    public String demo() {
        return "demo.jsp";
    }
}

