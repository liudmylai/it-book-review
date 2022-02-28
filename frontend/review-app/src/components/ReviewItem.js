function reviewItem(props) {
    const {review} = props;
    return(
        <div>
            <p>{review.name}, rate: {review.rate}</p>
            <p>{review.review}</p>
            <p>Published {review.date}</p>
        </div>
    );
}

export default reviewItem;