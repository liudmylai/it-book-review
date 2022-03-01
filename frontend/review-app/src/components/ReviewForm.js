import { useContext } from "react";
import { ReviewContext } from "../contexts/ReviewContext";

function ReviewForm() {

    const {formData, handleChange, handleSubmit} = useContext(ReviewContext);

  
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