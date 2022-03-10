import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReviewContext } from "../contexts/ReviewContext";
import Book from "./Book";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

// rendering book details with the New Review form and the list of reviews
function BookInfo() {
    const { setBookISBN, bookInfo, reviewsList } = useContext(ReviewContext);

    // get an object of key/value pair of URL parameters and bind value to the variable
    const { isbn } = useParams();

    // if 'isbn' variable has a value, then set the value to the appropriate state
    useEffect(() =>
        isbn && setBookISBN(isbn)
        , [isbn]
    );

    return (
        <section className='section text-muted'>
            <div className='container'>
                {bookInfo && <Book book={bookInfo} />}
                <ReviewForm />
                {reviewsList && reviewsList.length > 0 && <ReviewList />}
            </div>
        </section>
    );
}

export default BookInfo;