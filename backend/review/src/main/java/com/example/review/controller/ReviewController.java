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

	@GetMapping("/review/{id}")
	public ResponseEntity<Review> getStudentById(@PathVariable int id)
	{
		Review review = reviewRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Review not found"));
		return ResponseEntity.ok(review);                 
	}

}
