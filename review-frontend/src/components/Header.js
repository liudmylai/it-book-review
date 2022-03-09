import { Link, Outlet } from 'react-router-dom';
import SearchBar from './SearchBar';
import * as AuthAPI from '../services/auth-api';
import { Nav } from 'react-bootstrap';

function Header() {
    const isUserLoggedIn = AuthAPI.isUserLoggedIn();

    return (
        <>
            <header>
                <nav className='navbar'>
                    <div className='container'>
                        <Link className='navbar-brand' to='/index.html'>IT Books</Link>
                        <div className='navbar-nav'>
                            {!isUserLoggedIn && <Link className='nav-link' to='/admin/login'>Login</Link>}
                            {isUserLoggedIn &&
                                <Nav className="me-auto">
                                    <Nav.Link className="me-5" href='/admin'>Admin Panel</Nav.Link>
                                    <Nav.Link href='/' onClick={AuthAPI.logout}>Logout</Nav.Link>
                                </Nav>
                            }
                        </div>
                    </div>
                </nav>
            </header >
            <SearchBar />
            <Outlet />
        </>
    );
}

export default Header;