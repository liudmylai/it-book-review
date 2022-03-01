import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ReviewContext } from "../contexts/ReviewContext";
import Book from "./Book";

function BookInfo() {
    const { isbn } = useParams();
    const { setBookISBN, bookInfo } = useContext(ReviewContext);

    isbn && setBookISBN(isbn);

    return(
        <div>
            {bookInfo && <Book book={bookInfo} />} 
        </div>
    );
}

export default BookInfo;