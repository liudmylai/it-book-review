import { useContext } from "react";
import { ReviewContext } from "../contexts/ReviewContext";
import BookItem from "./BookItem";

function BookList() {
    const {bookList} = useContext(ReviewContext);
    return(
        <div>
            {bookList && bookList.books && bookList.books.map((book, index) => <BookItem book={book} key={index} />)}
        </div>
    );
}

export default BookList;