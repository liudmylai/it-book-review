package com.example.review.controller;

import java.time.LocalDateTime; // Import the LocalDateTime class
import java.time.format.DateTimeFormatter; // Import the DateTimeFormatter class
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
	    LocalDateTime currentDate = LocalDateTime.now();
	    DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
		String date = currentDate.format(dateFormat);
		review.setDate(date);
		return reviewRepo.save(review);
	}
	
	//update review by ID
	@PutMapping("/review/{id}")
	public ResponseEntity<Review> updateReview(@PathVariable int id, @RequestBody Review review) {
		Review r = reviewRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Review not found"));
		r.updateFields(review);
		Review updatedReview = reviewRepo.save(r);
		return ResponseEntity.ok(updatedReview); 
	}
	
	//delete review by ID
	@DeleteMapping("/review/{id}")
	public String deleteReview(@PathVariable int id) {
		if (!reviewRepo.existsById(id)) {
			throw new ResourceNotFoundException("Review not found");
		}
		reviewRepo.deleteById(id);
	    return "The review with id: "+ id +" is removed from the database.";
	}
	
}
