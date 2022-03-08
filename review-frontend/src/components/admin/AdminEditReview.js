import { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { AdminContext } from '../../contexts/AdminContext';
import AdminEditReviewForm from './AdminEditReviewForm';

function AdminEditReview() {

    const { reviewData, showEditReview, handleCancelEditReview, handleSubmitEditReview }  = useContext(AdminContext);

    return (
        <Modal show={showEditReview} centered scrollable size='lg' fullscreen='md-down' onHide={handleCancelEditReview}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Review (ID: {reviewData.id})</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AdminEditReviewForm />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCancelEditReview}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSubmitEditReview}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal >
    );
}

export default AdminEditReview;