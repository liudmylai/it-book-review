import * as ReviewsAPI from '../services/reviews-api';
import ReviewItem from './ReviewItem';
import { useState, useEffect } from 'react';
import ReviewForm from './ReviewForm';


function ReviewList() {
    // state to store data
    const [data, setData] = useState();
    // use Effect Hook to get initial info from the server
    useEffect(() => 
        ReviewsAPI.getAllReviews()
            .then(resultData => setData(resultData))
        , []
    );

    return(
        <div>
            {data && data.map((review, index) => <ReviewItem review={review} key={index} />)}
            <ReviewForm />
        </div>
    );
}

export default ReviewList;