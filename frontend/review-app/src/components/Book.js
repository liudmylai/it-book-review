function Book(props) {
    const {book} = props;
    return(
        <div>
            <img src={book.image} />
            <h1>{book.title}</h1>
            <h3>{book.subtitle}</h3>
            <h2>{book.authors}</h2>
            <p>{book.desc}</p>
            <p>Publisher: {book.publisher}</p>
            <p>Published: {book.year}</p>
            <p>ISBN: {book.isbn13}</p>
            <p>Pages: {book.pages}</p>
        </div>
    );
}

export default Book;