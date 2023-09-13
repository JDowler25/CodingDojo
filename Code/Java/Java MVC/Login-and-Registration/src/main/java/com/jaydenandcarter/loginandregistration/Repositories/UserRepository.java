// Pair Programmed w/ Carter

package com.jaydenandcarter.loginandregistration.Repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.jaydenandcarter.loginandregistration.Models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    
    Optional<User> findByEmail(String email);
    
}