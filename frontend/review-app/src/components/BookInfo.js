import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReviewContext } from "../contexts/ReviewContext";
import Book from "./Book";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

function BookInfo() {
    const { setBookISBN, bookInfo, reviewsList } = useContext(ReviewContext);
    const { isbn } = useParams();

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