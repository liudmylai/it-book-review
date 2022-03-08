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

    const [reviewData, setReviewData] = useState({});

    const [showEditReview, setShowEditReview] = useState(false);
    // const [isReviewFormSubmitted, setIsReviewFormSubmitted] = useState(false);

    const handleShowEditReview = (review) => {
        setReviewData(review);
        setShowEditReview(true);
    }

    const handleCancelEditReview = () => {
        setReviewData({});
        setShowEditReview(false);
    }

    const handleSubmitEditReview = () => {
        setShowEditReview(false);
        ReviewsAPI.updateReview(reviewData)
            .then(response => setAdminReviewsList(prev => prev.map(review => review.id === response.id ? response : review)))
            .finally(() => setReviewData({}))
    }

    function expandReview(id) {
        setAdminReviewsList(prev => prev.map(review => review.id === id ? { ...review, expand: (!review.expand) } : review));
    }


    const [deleteStatus, setDeleteStatus] = useState({});

    function handleShowDeleteConfirm(review) {
        setReviewData(review);
        setDeleteStatus({ status: 'confirm' });
    }

    function handleHideDeleteReview() {
        setReviewData({});
        setDeleteStatus({});
    }

    function handleConfirmDeleteReview(review) {
        ReviewsAPI.deleteReview(review)
            .then(response => setDeleteStatus({ status: 'success', message: response }))
            .then(() => setAdminReviewsList(prev => prev.filter(element => element.id !== review.id)))
    }

    return (
        <AdminContext.Provider value={{
            adminReviewsList,
            reviewData,
            setReviewData,
            showEditReview,
            handleShowEditReview,
            handleCancelEditReview,
            handleSubmitEditReview,
            deleteStatus,
            handleShowDeleteConfirm,
            handleHideDeleteReview,
            handleConfirmDeleteReview,
            expandReview
        }}>
            {props.children}
        </AdminContext.Provider>
    );
}