import { useEffect, useState } from "react";
import { newReview } from "../services/reviews-api";

function ReviewForm() {

    const [formData, setFormData] = useState({
        name: '',
        rate: '',
        review: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleChange(event) {
        const {name, value} = event.target;
        setFormData(prev => ({...prev, [name]: value}));
    }

    function handleSubmit(event) {
        event.preventDefault();
        setIsSubmitted(true);
    }

    function resetForm() {
        setIsSubmitted(false);
        setFormData({
            name: '',
            rate: '',
            review: ''
        });
    }

    useEffect(() => 
        isSubmitted && newReview(formData).finally(() => resetForm()), [isSubmitted]);
  
    return(
        <form>
            {<input name='name' value={formData.name} onChange={handleChange} placeholder='Name' />}
            {<textarea name='review' value={formData.review} onChange={handleChange} maxlength='2000' placeholder='Enter your text...'/>}
            {<input name='rate' value={formData.rate} onChange={handleChange} placeholder='Rate from 1 to 5' />}
            {<button onClick={handleSubmit}>Add</button>}
        </form>

    );
}

export default ReviewForm;