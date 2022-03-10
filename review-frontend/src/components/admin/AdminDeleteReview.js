import { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { AdminContext } from '../../contexts/AdminContext';

// rendering the Delete Review modals in the admin panel
function AdminDeleteReview() {
    const { deleteStatus, reviewData, handleHideDeleteReview, handleConfirmDeleteReview } = useContext(AdminContext);
    return (
        <>  
            {deleteStatus.status && <Modal show id='confirm' contentClassName='text-center' size='sm' centered>
                {deleteStatus.status === 'confirm' &&
                    <>
                        <Modal.Body>
                            Selected review will be deleted, ID: {reviewData.id}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleHideDeleteReview}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={() => handleConfirmDeleteReview(reviewData)}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </>
                }
                {deleteStatus.status === 'success' &&
                    <>
                        <Modal.Body>
                            <p className='text-center'>{deleteStatus.message}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className='d-grid'>
                                <Button variant='success' onClick={handleHideDeleteReview}>OK</Button>
                            </div>
                        </Modal.Footer>
                    </>
                }
            </Modal>}
        </>
    );
}

export default AdminDeleteReview;