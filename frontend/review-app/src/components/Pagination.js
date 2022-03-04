import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReviewContext } from '../contexts/ReviewContext';

function Pagination(props) {
    
    const { searchQuery } = useContext(ReviewContext);

    const { totalPages, currentPage, searchTitle } = props;

    const count = Math.ceil(totalPages / 10);

    function indexes(page, count) {
        let start, end;
        let result = [];

        if (count < 10) {
            for(let i = 1; i <= count; i++) {
                result.push(i);
            }
            return result;
        }

        if (page < 6) {
            start = 1;
        } else {
            start = Math.min(page - 2, count - 6);
        }

        if (page > (count - 5)) {
            end = count;
        } else {
            end = Math.max(page + 2, 7);
        }

        for(let i = start; i <= end; i++) {
            result.push(i);
        }

        if (start > 1) {
            result = [1, '...', ...result];
        }

        if (end < count) {
            result = [...result, '...', count];
        }

        return result;
    }
    
    const baseURL = '/search/' + encodeURI(searchQuery) + '/page-';

    return (
        <div className='pt-5'>
            <h6 className='text-muted'><small>{searchTitle}</small></h6>
            <nav>
                <ul className='pagination flex-wrap'>
                    <li className={currentPage > 1 ? 'page-item' : 'page-item disabled'}><Link to={baseURL + (currentPage - 1)} className='page-link'>Previous</Link></li>
                    {indexes(currentPage, count)
                        .map((page, index) => {
                            if (page === currentPage) {
                                return (<li className='page-item active' key={index}><span className='page-link'>{page}</span></li>);
                            } else if (page === '...') {
                                return (<li className='page-item disabled' key={index}><span className='page-link'>{page}</span></li>);
                            } else {
                                return (<li className='page-item' key={index}><Link className='page-link' to={baseURL + page}>{page}</Link></li>);
                            }
                        })}
                    <li className={currentPage < count ? 'page-item' : 'page-item disabled'}><Link to={baseURL + (currentPage + 1)} className='page-link'>Next</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;