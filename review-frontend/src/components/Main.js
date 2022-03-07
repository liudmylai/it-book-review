import { useContext } from 'react';
import { ReviewContext } from '../contexts/ReviewContext';
import BookList from "./BookList";

function Main() {
    const { newBooks } = useContext(ReviewContext);

    return (
        <>
            {newBooks &&
                <section className='section text-muted'>
                    <div className='container'>
                        <h1 className='new-books'>New released books</h1>
                        <BookList books={newBooks.books} />
                    </div>
                </section>
            }
        </>
    );
}

export default Main;