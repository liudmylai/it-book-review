import { Link } from 'react-router-dom';

// rendering a single book item
function BookItem(props) {
    const { book } = props;
    return (
        <div className='pt-4 col-xl-5th col-lg-3 col-md-4 col-sm-6 col-xs-12'>
            <div className='blog-box'>
                <div className='post-media'>
                    <Link to={'/book-' + book.isbn13}>
                        <img src={book.image} className='img-fluid' alt={book.title}/>
                        <div className='hovereffect'></div>
                    </Link>
                </div>
                <div className='blog-meta'>
                    <h4><Link to={'/book-' + book.isbn13}>{book.title}</Link></h4>
                    <p>{book.subtitle}</p>
                </div>
            </div>
        </div>
    );
}

export default BookItem;
