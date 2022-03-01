function BookItem(props) {
    const {book} = props;
    return(
        <div>
            <img src={book.image} />
            <h1>{book.title}</h1>
            <p>{book.subtitle}</p>
        </div>
    );
}

export default BookItem;