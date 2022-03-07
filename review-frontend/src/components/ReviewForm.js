import { useContext } from "react";
import { ReviewContext } from "../contexts/ReviewContext";

function ReviewForm() {

    const { formData, handleChange, handleSubmit } = useContext(ReviewContext);


    return (
        <div className="custombox clearfix">
            <h4 className="small-title">Leave a Review</h4>
            <div className="row">
                <div className="col-lg-12">
                    <form className="form-wrapper">
                        {<input name='name' type='text' className='form-control' value={formData.name} onChange={handleChange} placeholder='Your name' />}
                        {<textarea name='review' className='form-control' value={formData.review} onChange={handleChange} maxLength='2000' placeholder='Enter your review...' />}
                        {<input name='rate' className='form-control' value={formData.rate} onChange={handleChange} placeholder='Rate from 1 to 5' />}
                        {<button onClick={handleSubmit} type='submit' className='btn btn-outline-primary'>Submit Review</button>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ReviewForm;