package com.example.review.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.review.model.Review;
import java.util.List;
import java.util.Optional;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Integer> {
	List<Review> findAll();

	List<Review> findByIsbn(long isbn);

	Optional<Review> findById(int id);
}
