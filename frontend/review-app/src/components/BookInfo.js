import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReviewContext } from "../contexts/ReviewContext";
import Book from "./Book";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

function BookInfo() {
    const { isbn } = useParams();
    const { setBookISBN, bookInfo, reviewsList } = useContext(ReviewContext);

    useEffect(() =>
        isbn && setBookISBN(isbn)
        , [isbn]
    );


    return (
        <div className='container'>
            {bookInfo && <Book book={bookInfo} />}
            <ReviewForm />
            {reviewsList && reviewsList.length > 0 && <ReviewList />}
        </div>
    );
}

export default BookInfo;