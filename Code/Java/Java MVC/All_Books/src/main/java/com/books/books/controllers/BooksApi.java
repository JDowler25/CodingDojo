// Pair programmed with Jayden

package com.books.books.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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

    @GetMapping("/books")
    public List<Book> getAllBooks() {
        return bookService.allBooks();
    }
    
    @PostMapping("/books/create")
    public String createBook(Book book){
        bookService.createBook(book);
        return "redirect:/";
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