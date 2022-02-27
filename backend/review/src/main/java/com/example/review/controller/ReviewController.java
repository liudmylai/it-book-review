package com.example.review.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.review.exception.ResourceNotFoundException;
import com.example.review.model.Review;
import com.example.review.repository.ReviewRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class ReviewController {
	
	@Autowired
	private ReviewRepository reviewRepo;

	//get all reviews
	@GetMapping("/reviews")
	public List<Review> getAllReviews() {
		return reviewRepo.findAll();
	}
	
	//get reviews by ISBN
	@GetMapping("/reviews/{isbn}")
	public List<Review> getReviewsByIsbn(@PathVariable int isbn) {
		return reviewRepo.findByIsbn(isbn);
	}

	//get review by ID
	@GetMapping("/review/{id}")
	public ResponseEntity<Review> getReviewById(@PathVariable int id) {
		Review review = reviewRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Review not found"));
		return ResponseEntity.ok(review);                 
	}
	
	//create new review
	@PostMapping("/review")
	public Review newReview(@RequestBody Review review) {
		return reviewRepo.save(review);
	}
	
	@PutMapping("/review/{id}")
	public ResponseEntity<Review> updateReview(@PathVariable int id, @RequestBody Review review) {
		Review r = reviewRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Review not found"));
		r.updateFields(review);
		Review updatedReview = reviewRepo.save(r);
		return ResponseEntity.ok(updatedReview); 
	}
	
}
