import { useState, useEffect, createContext } from "react";
import * as ReviewsAPI from '../services/reviews-api';
import * as BooksAPI from '../services/itbooks-api';

export const ReviewContext = createContext();

export function ReviewProvider(props) {
    // state to store a list of reviews of the selected book from the server
    const [reviewsList, setReviewsList] = useState();
    // state to store user's input (new review)
    const [formData, setFormData] = useState({
        name: '',
        rate: '',
        review: '',
        isbn: ''
    });
    // state to store a "flag" value to check if a new review has been submitted
    const [isSubmitted, setIsSubmitted] = useState(false);
    // state to store the list of books on request
    const [searchResult, setSearchResult] = useState();
    // state to store the list of new released books
    const [newBooks, setNewBooks] = useState();

    // the 'useEffect' calls the function to get new releases books from the server
    // if the state value is not set
    useEffect(() => 
        !newBooks && BooksAPI.getNewBooks()
            .then(resultData => setNewBooks(resultData))
        , [newBooks]
    );

    // state to store search query value
    const [searchQuery, setSearchQuery] = useState();
    // state to store the current page value
    const[currentPage, setCurrentPage] = useState(1);

    // when the user clicks the "Search" button or changes the current page, 
    // "useEffect" fires and calls the function to search for books by the query 
    // (sends a request to the server)
    useEffect(() => 
        searchQuery && BooksAPI.searchBooks(searchQuery, currentPage)
            .then(resultData => setSearchResult(resultData))
        , [searchQuery, currentPage]
    );
    
    // state to store details of the selected book
    const [bookInfo, setBookInfo] = useState();
    // state to store ISBN (number) of the selected book
    const [bookISBN, setBookISBN] = useState();

    // when the user clicks on a certain book, 'bookISBN' state is changed and it triggers 'useEffect' for getting 
    // book's details by the ISBN from the server 
    useEffect(() => 
        bookISBN && BooksAPI.getBookByISBN(bookISBN)
            .then(resultData => setBookInfo(resultData))
        , [bookISBN]
    );

    // the changing of 'bookISBN' state also triggers another 'useEffect' for getting 
    // a list of reviews for the seleted book
    useEffect(() => 
        bookISBN && ReviewsAPI.getReviewsByISBN(bookISBN)
            .then(resultData => setReviewsList(resultData))
        , [bookISBN]
    );

    // function to add user's input (new review)
    function handleChange(event) {
        const {name, value} = event.target;
        setFormData(prev => ({...prev, [name]: value}));
    }

    // function to submit the new review by clicking on 'Submit Review' button
    function handleSubmit(event) {
        event.preventDefault();
        // add the property isbn current value ISBN
        setFormData(prev => ({...prev, isbn: bookISBN}));
        setIsSubmitted(true);
    }

    // function to reset form after submitting new review
    function resetForm() {
        setIsSubmitted(false);
        setFormData({
            name: '',
            rate: '',
            review: '',
            isbn: ''
        });
    }

    // the 'useEffect' triggers when the new review has been submitted
    // and calls the function to add a new review to the database 
    useEffect(() => 
        isSubmitted && ReviewsAPI.createNewReview(formData)
            .then(response => setReviewsList(prev => ([response, ...prev])))
            .finally(() => resetForm())
        , [isSubmitted]
    );

    return(
        <ReviewContext.Provider value={{
            reviewsList, 
            formData, 
            handleChange, 
            handleSubmit, 
            searchQuery, 
            searchResult, 
            bookInfo, 
            setBookISBN, 
            setSearchQuery, 
            setCurrentPage, 
            newBooks
        }}>
            {props.children}
        </ReviewContext.Provider> 
    );
}