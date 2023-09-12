// Pair programmed with Carter

package com.safetravels.safe_travels.repositories;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.safetravels.safe_travels.models.SafeTravel;

@Repository
public interface SafeTravelRepository extends CrudRepository<SafeTravel, Long> {
            // this method retrieves all the books from the database
            List<SafeTravel> findAll();

}
