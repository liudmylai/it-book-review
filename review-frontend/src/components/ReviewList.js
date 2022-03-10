import ReviewItem from './ReviewItem';
import { useContext } from 'react';
import { ReviewContext } from '../contexts/ReviewContext';

// render the total number of reviews and each review for the selected book
function ReviewList() {
    const { reviewsList } = useContext(ReviewContext);

    return (
        <div className='custombox clearfix'>
            <h4 className='small-title'>{reviewsList.length} Reviews</h4>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='comments-list'>
                        {reviewsList.map((review, index) => <ReviewItem review={review} key={index} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewList;
