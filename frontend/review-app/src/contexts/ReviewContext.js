import { useState, useEffect, createContext } from "react";
import * as ReviewsAPI from '../services/reviews-api';


export const ReviewContext = createContext();

export function ReviewProvider(props) {
    // state to store data
    const [data, setData] = useState();
    // state to store user's input (new review)
    const [formData, setFormData] = useState({
        name: '',
        rate: '',
        review: ''
    });
    // state to store 'flag' value
    const [isSubmitted, setIsSubmitted] = useState(false);


    // use Effect Hook to get initial info from the server
    useEffect(() => 
    ReviewsAPI.getAllReviews()
        .then(resultData => setData(resultData))
        , []
    );
    /**
     * Function name: handleChange
     * @param {*} event 
     * 
     * Inside the function:
     * 1. Add user's input (new review)
     */
    function handleChange(event) {
        const {name, value} = event.target;
        setFormData(prev => ({...prev, [name]: value}));
    }

    // function to submit the new form
    
    function handleSubmit(event) {
        event.preventDefault();
        setIsSubmitted(true);
    }

    //  function to reset form
    function resetForm() {
        setIsSubmitted(false);
        setFormData({
            name: '',
            rate: '',
            review: ''
        });
    }
    useEffect(() => 
    isSubmitted && ReviewsAPI.newReview(formData).finally(() => resetForm()), [isSubmitted]);

    return(
        <ReviewContext.Provider value={{
            data, formData, handleChange, handleSubmit
        }}>
            {props.children}
        </ReviewContext.Provider> 
    );
}