import { useContext } from 'react';
import { ReviewContext } from '../contexts/ReviewContext';
import BookItem from './BookItem';

function BookList() {
    const { bookList } = useContext(ReviewContext);
    return (
        <div className='container'>
            <div className='row grid-style'>
                {bookList && bookList.books && bookList.books.map((book, index) => <BookItem book={book} key={index} />)}
            </div>
        </div>
    );
}

export default BookList;