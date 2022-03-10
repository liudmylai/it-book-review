
// rendering the book info
function Book(props) {
    const { book } = props;
    return (

        <div className="card mb-3 book">
            <div className="row g-0">
                <div className="col-md-3">
                    <img src={book.image} />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h2 className="card-title">{book.title}</h2>
                        <h4 className="card-subtitle">{book.subtitle}</h4>
                        <h5 className="card-text">by {book.authors}</h5>
                        <p className="card-data text-muted">Released: {book.year}</p>
                        <p className="card-data text-muted">Publisher(s): {book.publisher}</p>
                        <p className="card-data text-muted">Pages: {book.pages}</p>
                        <p className="card-data text-muted">ISBN: {book.isbn13}</p>
                        <p className="card-desc">{book.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Book;



