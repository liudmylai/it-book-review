
// rendering single review
function ReviewItem(props) {
    const { review } = props;

    // converting time range in milliseconds to user-friendly message
    function convertDate(timestamp) {
        let duration = Date.now() - timestamp;

        const total_seconds = parseInt(Math.floor(duration / 1000)),
              total_minutes = parseInt(Math.floor(total_seconds / 60)),
              total_hours = parseInt(Math.floor(total_minutes / 60));

        let minutes = parseInt(total_minutes % 60), 
            hours = parseInt(total_hours % 24),
            days = parseInt(Math.floor(total_hours / 24));
        
        if ( total_seconds < 60) {
            return "a few seconds ago";
        } else if (total_minutes < 60) {
            return minutes + " minutes ago";
        } else if (total_hours < 25) {
            return hours + " hours and " + minutes + " minutes ago";
        } else if (days === 1)  {
            return "1 day ago";
        } else {
            return days + " days ago";
        }
    }
    // creating an array for further displaying as stars rating
    function stars(rate) {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            stars[i] = (i < rate) ? 1 : 0;
        }
        return stars;
    }

    return (
        <div className='media'>
            <div className='media-body'>
                <h4 className='media-heading username'>{review.name} <small>Published {convertDate(review.date)}</small></h4>
                <p>{stars(review.rate).map(star => star === 1 ? <i class="fas fa-star"/> : <i class="far fa-star"/>)}</p>
                <p>{review.review}</p>
            </div>
        </div>
    );
}

export default ReviewItem;