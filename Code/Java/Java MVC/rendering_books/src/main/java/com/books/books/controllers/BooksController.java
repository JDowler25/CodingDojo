// PAIR PROGRAMMED WITH CARTER CRICK


package com.books.books.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.books.books.models.Book;
import com.books.books.services.BookService;

@Controller
public class BooksController {
    @Autowired
    BookService bookService;
    @GetMapping("/")
    public String index(){
        return "index.jsp";
    }

    @GetMapping("/books/{id}")
    public String showBook(@PathVariable("id") Long id, Model model) {
        Book book = bookService.findBook(id);
        model.addAttribute("book", book);
        return "show.jsp";
    }
}
