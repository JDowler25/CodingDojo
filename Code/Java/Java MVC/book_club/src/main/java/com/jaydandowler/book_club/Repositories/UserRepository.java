// Pair programmed with Carter

package com.jaydandowler.book_club.Repositories;
import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.jaydandowler.book_club.Models.Book;
import com.jaydandowler.book_club.Models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	List<User> findAll();
    Optional<User> findByEmail(String email);
    
}