import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import * as ReviewsAPI from '../../services/reviews-api';
import AdminEditReview from "./AdminEditReview";
import AdminReviewItem from "./AdminReviewItem";

function AdminReviewList() {

    const { adminReviewsList, setAdminEditReviewFormData } = useContext(AdminContext);


    return (
        <section>
            {adminReviewsList &&
                <div className="container">
                    <h4>{adminReviewsList.length} Reviews</h4>
                    {adminReviewsList.map((review, index) => <AdminReviewItem review={review} key={index} />)}
                </div>
            }
            <AdminEditReview />
        </section>
    );
}

export default AdminReviewList;