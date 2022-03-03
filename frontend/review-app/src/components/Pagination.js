import { useContext } from "react";
import { Link } from "react-router-dom";
import { ReviewContext } from "../contexts/ReviewContext";

function Pagination() {
    const { bookList } = useContext(ReviewContext);
    const pages = [];
    for (let i = 0, x = Math.ceil(bookList.total / 10); i < x; i++) {
        pages[i] = i + 1;

    }

    return (
        <div className='container'>
            <nav>
                <ul className="pagination">
                    <li className={bookList.page > 1 ? "page-item" : "page-item disabled"}><Link to={'/search/page-' + (Number(bookList.page) - 1)} className="page-link">Previous</Link></li>

                    {pages.map((page, index) =>
                    (page == bookList.page
                        ?
                        <li className="page-item active" key={index}><span className="page-link">{page}</span></li>
                        :
                        <li className="page-item" key={index}><Link to={'/search/page-' + page} className="page-link">{page}</Link></li>
                    ))}
                    <li className={bookList.page < pages.length ? "page-item" : "page-item disabled"}><Link to={'/search/page-' + (Number(bookList.page) + 1)} className="page-link">Next</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;