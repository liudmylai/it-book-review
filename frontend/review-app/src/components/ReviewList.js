import ReviewItem from './ReviewItem';
import { useContext } from 'react';
import ReviewForm from './ReviewForm';
import { ReviewContext } from '../contexts/ReviewContext';


function ReviewList() {
    const {data} = useContext(ReviewContext);

    return(
        <div>
            {data && data.map((review, index) => <ReviewItem review={review} key={index} />)}
            <ReviewForm />
        </div>
    );
}

export default ReviewList;