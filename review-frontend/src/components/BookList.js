import BookItem from './BookItem';

function BookList(props) {
    const { books } = props;
    return (
        <div className='row grid-style'>
            {books.map((book, index) => <BookItem book={book} key={index} />)}
        </div>
    );
}

export default BookList;