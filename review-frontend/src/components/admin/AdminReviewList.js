import { useContext } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import AdminDeleteReview from "./AdminDeleteReview";
import AdminEditReview from "./AdminEditReview";
import AdminReviewItem from "./AdminReviewItem";

function AdminReviewList() {

    const { adminReviewsList } = useContext(AdminContext);


    return (
        <section>
            {adminReviewsList &&
                <div className='container'>
                    <h4>{adminReviewsList.length} Reviews</h4>
                    {adminReviewsList.map((review, index) => <AdminReviewItem review={review} key={index} />)}
                </div>
            }
            <AdminEditReview />
            <AdminDeleteReview />
        </section>
    );
}

export default AdminReviewList;