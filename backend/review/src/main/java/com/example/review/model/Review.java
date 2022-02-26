package com.example.review.model;

import javax.persistence.*;

//+--------+---------------+------+-----+---------+----------------+
//| Field  | Type          | Null | Key | Default | Extra          |
//+--------+---------------+------+-----+---------+----------------+
//| id     | int           | NO   | PRI | NULL    | auto_increment |
//| isbn   | int           | YES  |     | NULL    |                |
//| name   | varchar(30)   | YES  |     | NULL    |                |
//| review | varchar(2000) | YES  |     | NULL    |                |
//| date   | datetime      | YES  |     | NULL    |                |
//| rate   | int           | YES  |     | NULL    |                |
//+--------+---------------+------+-----+---------+----------------+

@Entity
@Table(name="reviews")
public class Review {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="isbn")
	private int isbn;
	
	@Column(name="name")
	private String name;
	
	@Column(name="review")
	private String review;
	
	@Column(name="date")
	private String date;
	
	@Column(name="rate")
	private int rate;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getIsbn() {
		return isbn;
	}

	public void setIsbn(int isbn) {
		this.isbn = isbn;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public int getRate() {
		return rate;
	}

	public void setRate(int rate) {
		this.rate = rate;
	}
	
	
}
