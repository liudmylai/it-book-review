function Book(props) {
    const { book } = props;
    return (

        <div className="card mb-3 book">
            <div class="row g-0">
                <div className="col-md-3">
                    <img src={book.image} />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h2 className="card-title">{book.title}</h2>
                        <h4 className="card-subtitle">{book.subtitle}</h4>
                        <h5 className="card-text">by {book.authors}</h5>
                        <p className="card-text">Released: {book.year}</p>
                        <p className="card-text">Publisher(s): {book.publisher}</p>
                        <p className="card-text">Pages: {book.pages}</p>
                        <p className="card-text"><small class="text-muted">ISBN: {book.isbn13}</small></p>
                        <p className="card-text">{book.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Book;



