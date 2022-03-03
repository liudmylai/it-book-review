import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReviewContext } from "../contexts/ReviewContext";
import BookList from "./BookList";
import Pagination from "./Pagination";

function SearchResults() {
    const {bookList, setCurrentPage} = useContext(ReviewContext);
    const { num } = useParams();

    useEffect(() =>
        num && setCurrentPage(num)
        , [num]
    );
    
    // const {page, total, books} = bookList;
    // const handleClick = event => {
    //     setNextPage(page + 1);
    // }

    return(
        <div>
            <BookList />
            {bookList && <Pagination />}
            {/* {total > books.length && 
                <button onClick={handleClick}>Next</button>} */}
        </div>
    );
}

export default SearchResults;