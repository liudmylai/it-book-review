import { useContext } from "react";
import { Accordion, Button } from 'react-bootstrap';

import { AdminContext } from "../../contexts/AdminContext";

function AdminReviewItem(props) {
    const { review } = props;
    const { handleShowEditReview, handleShowDeleteConfirm } = useContext(AdminContext);

    return (

        <Accordion.Item eventKey={review.id} className='row'>
            <Accordion.Header as='div' className='col-lg-10'>
                <div className='col-lg-1'>
                    {review.id}
                </div>
                <div className='col-lg-3'>
                    {review.isbn}
                </div>
                <div className='col-lg-3'>
                    {review.name}
                </div>
                <div className='col-lg-3'>
                    {review.date}
                </div>
            </Accordion.Header>
            <div className='col-lg-1'>
                <button type="button" className='accordion-btn' onClick={() => handleShowEditReview(review)}>
                    <i className='fas fa-edit' />
                </button>
                </div>
                <div className='col-lg-1'>
                <button type="button" className='accordion-btn' onClick={() => handleShowDeleteConfirm(review)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>

            <Accordion.Body className='col-lg-10 accordion-review'>
                {review.review}
            </Accordion.Body>
        </Accordion.Item>

    );
}

export default AdminReviewItem;