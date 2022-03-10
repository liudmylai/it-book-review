import BookItem from './BookItem';

// rendering a list of book items
function BookList(props) {
    const { books } = props;
    return (
        <div className='row grid-style'>
            {books.map((book, index) => <BookItem book={book} key={index} />)}
        </div>
    );
}

export default BookList;