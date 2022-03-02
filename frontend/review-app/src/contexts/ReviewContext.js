import { useState, useEffect, createContext } from "react";
import * as ReviewsAPI from '../services/reviews-api';
import * as BooksAPI from '../services/itbooks-api';


export const ReviewContext = createContext();

export function ReviewProvider(props) {
    // state to store data
    const [reviewsList, setReviewsList] = useState();
    // state to store user's input (new review)
    const [formData, setFormData] = useState({
        name: '',
        rate: '',
        review: '',
        isbn: ''
    });
    // state to store 'flag' value
    const [isSubmitted, setIsSubmitted] = useState(false);
    // state to store list of books
    const [bookList, setBookList] = useState();
    // use Effect Hook to get new releases books from the server
    useEffect(() => 
        BooksAPI.getNewBooks()
            .then(resultData => setBookList(resultData))
        , []
    );

    const [bookISBN, setBookISBN] = useState();
    const [bookInfo, setBookInfo] = useState();

    useEffect(() => 
        bookISBN && BooksAPI.getBookByISBN(bookISBN)
            .then(resultData => setBookInfo(resultData))
            // .finally(() => setBookISBN(null))
        , [bookISBN]
    );


    // use Effect Hook to get initial info from the server
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

    // function to submit the new form
    function handleSubmit(event) {
        event.preventDefault();
        setFormData(prev => ({...prev, isbn: bookISBN}));
        setIsSubmitted(true);
    }

    //  function to reset form
    function resetForm() {
        setIsSubmitted(false);
        setFormData({
            name: '',
            rate: '',
            review: '',
            isbn: ''
        });
    }
    useEffect(() => 
    isSubmitted && ReviewsAPI.newReview(formData).finally(() => resetForm()), [isSubmitted]);

    return(
        <ReviewContext.Provider value={{
            reviewsList, formData, handleChange, handleSubmit, bookList, bookInfo, setBookISBN
        }}>
            {props.children}
        </ReviewContext.Provider> 
    );
}