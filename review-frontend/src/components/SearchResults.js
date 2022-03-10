import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReviewContext } from "../contexts/ReviewContext";
import BookList from "./BookList";
import Pagination from "./Pagination";

function SearchResults() {
    const { searchResult, setCurrentPage, setSearchQuery } = useContext(ReviewContext);
    // get an object of key/value pairs of URL parameters and bind values to variables
    const { query, num } = useParams();
    // if 'query' and/or 'num' variables have values, set the values to the appropriate states
    useEffect(() => {
        num && setCurrentPage(num);
        query && setSearchQuery(query);
    }
        , [num, query]
    );
    // generate prompt based on the current page number and total numbers of search results
    const searchTitle = searchResult && `${searchResult.page * 10 - 9} - ${Math.min(searchResult.page * 10, searchResult.total)} of ${searchResult.total} search results for "${query}"`;

    return (
        <section className='section text-muted'>
            {searchResult && searchResult.total > 0 ?
                <div className='container'>
                    <h5>{searchTitle}</h5>
                    <BookList books={searchResult.books} />
                    <Pagination totalPages={Number(searchResult.total)} currentPage={Number(searchResult.page)} searchTitle={searchTitle} />
                </div>
            :
                <div className='container text-center'>
                    <h2>Nothing turned up</h2>
                    <h6>You can try again</h6>
                </div>
            }
        </section>
    );
}

export default SearchResults;