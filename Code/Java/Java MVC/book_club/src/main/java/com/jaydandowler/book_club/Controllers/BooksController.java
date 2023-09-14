// Pair programmed with Carter

package com.jaydandowler.book_club.Controllers;

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

import com.jaydandowler.book_club.Models.Book;
import com.jaydandowler.book_club.Services.BookService;
import com.jaydandowler.book_club.Services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class BooksController {
    
    @Autowired
    BookService bookService;
    @Autowired
    UserService userService;

    @GetMapping("/books")
    public String home(HttpSession session, Model model) {
    	if(session.getAttribute("userId")==null) {
    		return "redirect:/";
    	}
    	List<Book> books = bookService.allBooks();
    	model.addAttribute("books", books);
    	return "home.jsp";
    }
    
    @GetMapping("/books/new")
    public String newBook(@ModelAttribute("book") Book book, Model model, HttpSession session){
    	if(session.getAttribute("userId")==null) {
            return "redirect:/";
        	}
        	return "new.jsp";
    }

    @PostMapping("/books")
    public String create(@Valid @ModelAttribute("book") Book book, BindingResult result, Model model) {
        if (result.hasErrors()) {
            model.addAttribute("book", book);
            return "/new.jsp";
        } else {
            bookService.createBook(book);
            return "redirect:/books";
        }
        }

    @GetMapping("/books/{id}")
    public String showBook(@PathVariable("id") Long id, Model model, HttpSession session) {
        if(session.getAttribute("userId")==null){
            return "redirect:/";
        }

        Book book = bookService.findBook(id);

        // Get the logged-in user ID from session and add to the model.
        Long loggedInUserId = (Long) session.getAttribute("userId");
        model.addAttribute("loggedInUserId", loggedInUserId);
        
        model.addAttribute("book", book);
        return "show.jsp";
    }
    
    @RequestMapping("/books/{id}/edit")
    public String edit(@PathVariable("id") Long id, Model model) {
        Book book = bookService.findBook(id);
        model.addAttribute("book", book);
        return "edit.jsp";
    }
    
    @PutMapping(value = "/books/{id}")
    public String update(@Valid @ModelAttribute("book") Book book, BindingResult result,
            Model model) {
        if (result.hasErrors()) {
            model.addAttribute("book", book);
            return "/edit.jsp";
        } else {
            bookService.updateBook(book);
            return "redirect:/books";
        }
    }   
    
    @DeleteMapping("/books/{id}/delete")
    public String delete(@PathVariable("id") Long id, Model model) {
    	bookService.deleteBook(id);
    	return "redirect:/books";
    }
}