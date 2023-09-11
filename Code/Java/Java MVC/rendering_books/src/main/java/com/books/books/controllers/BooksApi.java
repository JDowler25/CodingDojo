// PAIR PROGRAMMED WITH CARTER CRICK

package com.books.books.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.books.books.models.Book;
import com.books.books.services.BookService;

@RestController
@RequestMapping("/api")
public class BooksApi {
    private final BookService bookService;
    public BooksApi(BookService bookService){
        this.bookService = bookService;
    }

    @GetMapping("/books/{id}")
        public String showBook(@PathVariable("id") Long id) {
        return "show.jsp";
    }

    @GetMapping("/books")
    public List<Book> getAllBooks() {
        return bookService.allBooks();
    }

    @GetMapping("/book/new")
    public String newBook(@ModelAttribute("book") Book book){
        return "new.jsp";
    }
    
    @PostMapping("/books/create")
    public String createBook(Book book){
        bookService.createBook(book);
        return "redirect:/";
    }

    @GetMapping("/book/edit")
    public String editBook(@ModelAttribute("book") Book book){
        return "edit.jsp";
    }
    
    @PutMapping("/books/update/{id}")
    public String update(Book book) {
        bookService.updateBook(book);
        return "redirect:/";
    }
    
    @RequestMapping(value="/books/{id}", method=RequestMethod.DELETE)
    public void destroy(@PathVariable("id") Long id) {
        bookService.deleteBook(id);
    }
}