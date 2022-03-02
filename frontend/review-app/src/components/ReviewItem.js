function reviewItem(props) {
    const { review } = props;
    return (
        <div className='media'>
            <div className='media-body'>
                <h4 className='media-heading user_name'>{review.name} <small>Published {review.date}</small></h4>
                <p>rate: {review.rate}</p>
                <p>{review.review}</p>
            </div>
        </div>
    );
}

export default reviewItem;