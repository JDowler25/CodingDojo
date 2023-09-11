// PAIR PROGRAMMED WITH CARTER CRICK

package com.books.books.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BooksController {
    @GetMapping("/")
    public String index(){
        return "index.jsp";
    }
    
}
