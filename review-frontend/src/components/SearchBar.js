import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReviewContext } from '../contexts/ReviewContext';

// rendering search form
function SearchBar() {
    const { setCurrentPage } = useContext(ReviewContext);
    // setting the reference to the search input in the uncontrolled form
    const queryRef = useRef(null);
    const navigate = useNavigate();
    // handling form submission
    const searchSubmit = event => {
        event.preventDefault();
        let query = queryRef.current.value;
        if (query && query.trim().length > 0) {
            // resetting pagination for the new search
            setCurrentPage(1);
            // resetting search form
            queryRef.current.value = '';
            // redirecting to search results
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