import { Link } from "react-router-dom";

function BookItem(props) {
    const {book} = props;
    return(
        <Link to={'/books/' + book.isbn13}>
            <img src={book.image} />
            <h1>{book.title}</h1>
            <p>{book.subtitle}</p>
        </Link>
    );
}

export default BookItem;