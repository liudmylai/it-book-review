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
                        {/* {<input name='rate' className='form-control' value={formData.rate} onChange={handleChange} placeholder='Rate from 1 to 5' />} */}
                        {/* {<select className="rating" id='rate' name='rate' onChange={handleChange}>
                                <option value='1' id='1'>1</option>
                                <option value='2' id='2'>2</option>
                                <option value='3' id='3'>3</option>
                                <option value='4' id='4'>4</option>
                                <option value='5' id='5'>5</option>
                            </select>} */}

                        {<div className="rating">
                            <input type="radio" name="rate" value="5" id="5" onChange={handleChange} /><label htmlFor="5">☆</label>
                            <input type="radio" name="rate" value="4" id="4" onChange={handleChange} /><label htmlFor="4">☆</label>
                            <input type="radio" name="rate" value="3" id="3" onChange={handleChange} /><label htmlFor="3">☆</label>
                            <input type="radio" name="rate" value="2" id="2" onChange={handleChange} /><label htmlFor="2">☆</label>
                            <input type="radio" name="rate" value="1" id="1" onChange={handleChange} /><label htmlFor="1">☆</label>
                        </div>}
                        {<button onClick={handleSubmit} type='submit' className='btn btn-outline-primary'>Submit Review</button>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ReviewForm;