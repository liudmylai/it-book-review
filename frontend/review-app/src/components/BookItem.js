import { Link } from 'react-router-dom';

function BookItem(props) {
    const { book } = props;
    return (
        <div class='pt-4 col-lg-3 col-md-6 col-sm-12 col-xs-12'>
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
