import { useContext } from "react";
import { AdminContext } from "../../contexts/AdminContext";

// rendering the Edit Review form in the admin panel
function AdminEditReviewForm() {
    const { reviewData, setReviewData }  = useContext(AdminContext);

    // function to add user's input (new review)
    function handleChange(event) {
        const { name, value } = event.target;
        setReviewData(prev => ({ ...prev, [name]: value }));
    }

    return (
        <div>
            <div className='row'>
                <div className='col-lg-12'>
                    <form className='form-wrapper'>
                        <div className='mb-3'>
                            <label htmlFor='name' className='form-label'>Name:</label>
                            {<input id='name' name='name' type='text' className='form-control' value={reviewData.name} onChange={handleChange} />}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='review' className='form-label'>Review:</label>
                            {<textarea id='review' name='review' className='form-control' value={reviewData.review} onChange={handleChange} maxLength='2000' />}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='isbn' className='form-label'>ISBN:</label>
                            {<input id='isbn' name='isbn' type='text' className='form-control' value={reviewData.isbn} onChange={handleChange} />}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='rate' className='form-label'>Rate:</label>
                            {<select id='rate' name='rate' className='form-control' onChange={handleChange} defaultValue={reviewData.rate}>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>}
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default AdminEditReviewForm;