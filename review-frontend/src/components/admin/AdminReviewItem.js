import { useContext } from "react";
import { AdminContext } from "../../contexts/AdminContext";

function AdminReviewItem(props) {
    const { review } = props;
    const { handleShowEditReview, expandReview } = useContext(AdminContext);

    return (
        <div className='row'>
            <div className='col-lg-1'>
                {review.id}
            </div>
            <div className='col-lg-2'>
                {review.isbn}
            </div>
            <div className='col-lg-4'>
                {review.name}
            </div>
            <div className='col-lg-3'>
                {review.date}
            </div>
            <div className='col-lg-2'>
                <button type="button" onClick={()=>expandReview(review.id)}>Show</button>
                <button type="button" onClick={()=>handleShowEditReview(review)}>Edit</button>
                <button type="button">X</button>
            </div>
            {review.expand && <div className='col-lg-10'>
                {review.review}
            </div>}
            <hr/>
        </div>

    );
}

export default AdminReviewItem;