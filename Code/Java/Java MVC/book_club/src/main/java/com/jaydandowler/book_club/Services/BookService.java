// Pair programmed with Carter


package com.jaydandowler.book_club.Services;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.jaydandowler.book_club.Models.Book;
import com.jaydandowler.book_club.Repositories.BookRepository;

@Service
public class BookService {
    // adding the book repository as a dependency
    private final BookRepository bookRepository;
    
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    // returns all the books
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }
    // creates a book
    public Book createBook(Book b) {
        return bookRepository.save(b);
    }
    // retrieves a book
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }
    // updates a book
    public Book updateBook(Book book) {
        bookRepository.save(book);
        return book;
    }
    // deletes a book
    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }
}
