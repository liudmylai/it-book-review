import { useContext } from "react";
import { AdminContext } from "../../contexts/AdminContext";

function AdminEditReviewForm() {
    const { adminEditReviewFormData, setAdminEditReviewFormData }  = useContext(AdminContext);

    // function to add user's input (new review)
    function handleChange(event) {
        const { name, value } = event.target;
        setAdminEditReviewFormData(prev => ({ ...prev, [name]: value }));
    }

    return (
        <div>
            <div className='row'>
                <div className='col-lg-12'>
                    <form className='form-wrapper'>
                        <div className='mb-3'>
                            <label htmlFor='name' className='form-label'>Name:</label>
                            {<input name='name' type='text' className='form-control' value={adminEditReviewFormData.name} onChange={handleChange} />}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='review' className='form-label'>Review:</label>
                            {<textarea name='review' className='form-control' value={adminEditReviewFormData.review} onChange={handleChange} maxLength='2000' />}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='rate' className='form-label'>Rate:</label>
                            {<input name='rate' className='form-control' value={adminEditReviewFormData.rate} onChange={handleChange} />}
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default AdminEditReviewForm;