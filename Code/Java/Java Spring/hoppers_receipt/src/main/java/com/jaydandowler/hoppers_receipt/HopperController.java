package com.jaydandowler.hoppers_receipt;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HopperController {
    
    // class definition and imports here...
    @GetMapping("/")
    public String index(Model model) {

        String name = "Grace Hopper";
        String itemName = "Copper wire";
        double price = 5.25;
        String description = "Metal strips, also an illustration of nanoseconds.";
        String vendor = "Little Things Corner Store";

        Receipt receipt = new Receipt(name, itemName, price, description, vendor);

        // Your code here! Add values to the view model to be rendered
        // model.addAttribute("name", name);
        // model.addAttribute("itemName", itemName);
        // model.addAttribute("price", price);
        // model.addAttribute("description", description);
        // model.addAttribute("vendor", vendor);
        model.addAttribute("receipt", receipt);

        return "index.jsp";
    }
    // ...

}
