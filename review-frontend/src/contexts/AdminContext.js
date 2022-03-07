import { createContext, useEffect, useState } from "react";
import * as ReviewsAPI from '../services/reviews-api';

export const AdminContext = createContext();

export function AdminProvider(props) {

    const [adminReviewsList, setAdminReviewsList] = useState();

    // use Effect Hook to get all reviews from the server
    useEffect(() =>
        ReviewsAPI.getAllReviews()
            .then(resultData => setAdminReviewsList(resultData))
        , []
    );

    const [adminEditReviewFormData, setAdminEditReviewFormData] = useState({});

    const [showEditReview, setShowEditReview] = useState(false);
    const [isReviewFormSubmitted, setIsReviewFormSubmitted] = useState(false);

    const handleShowEditReview = (review) => {
        setAdminEditReviewFormData(review);
        setShowEditReview(true);
    }

    const handleCancelEditReview = () => {
        setAdminEditReviewFormData({});
        setShowEditReview(false);
    }

    const handleSubmitEditReview = () => {
        setShowEditReview(false);
        setIsReviewFormSubmitted(true);
    }

    useEffect(() =>
        isReviewFormSubmitted && ReviewsAPI.updateReview(adminEditReviewFormData)
            .then(response => setAdminReviewsList(prev => prev.map(review => review.id === response.id ? response : review)))
            .then(() => setAdminEditReviewFormData({}))
            .finally(() => setIsReviewFormSubmitted(false))
        , [isReviewFormSubmitted]
    );

    function expandReview(id) {
        setAdminReviewsList(prev => prev.map(review => review.id === id ? {...review, expand: (!review.expand)} : review));
    }



    return (
        <AdminContext.Provider value={{
            adminReviewsList,
            adminEditReviewFormData,
            setAdminEditReviewFormData,
            showEditReview,
            handleShowEditReview,
            handleCancelEditReview,
            handleSubmitEditReview,
            expandReview
        }}>
            {props.children}
        </AdminContext.Provider>
    );
}