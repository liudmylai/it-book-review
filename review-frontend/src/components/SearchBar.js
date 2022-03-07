import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReviewContext } from '../contexts/ReviewContext';

function SearchBar() {
    const {setSearchQuery, setCurrentPage} = useContext(ReviewContext);

    const queryRef = useRef(null);

    const navigate = useNavigate();

    const searchSubmit = event => {
        event.preventDefault();
        let query = queryRef.current.value;
        if (query && query.trim().length > 0) {
            // setSearchQuery(query.trim());
            setCurrentPage(1);
            queryRef.current.value = '';
            navigate('/search/' + encodeURI(query.trim()));
        }
    }

    return (
        <section className='section'>
            <div className='container'>
                <form onSubmit={searchSubmit} className='d-flex'>
                    <input id='bookName' ref={queryRef} className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
                    <button className='btn btn-outline-primary my-2 my-sm-0' type='submit'>Search</button>
                </form>
            </div>
        </section>
    );
}

export default SearchBar;