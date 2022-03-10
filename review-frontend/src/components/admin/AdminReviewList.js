import { useContext } from "react";
import { Accordion } from 'react-bootstrap';
import { AdminContext } from "../../contexts/AdminContext";
import AdminDeleteReview from "./AdminDeleteReview";
import AdminEditReview from "./AdminEditReview";
import AdminReviewItem from "./AdminReviewItem";

// rendering reviews list in the admin panel
function AdminReviewList() {

    const { adminReviewsList } = useContext(AdminContext);

    return (
        <section className='section text-muted'>
            {adminReviewsList &&
                <div className='container'>
                    <h5>Reviews: {adminReviewsList.length}</h5>
                    <Accordion flush>
                        {adminReviewsList.map((review, index) => <AdminReviewItem review={review} key={index} />)}
                    </Accordion>
                </div>
            }
            <AdminEditReview />
            <AdminDeleteReview />
        </section>
    );
}

export default AdminReviewList;