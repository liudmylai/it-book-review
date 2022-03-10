import { Link, Outlet } from 'react-router-dom';
import * as AuthAPI from '../../services/auth-api';

// rendering header for the admin panel
function AdminPanel() {
    return (
        <>
            <header>
                <nav className='navbar'>
                    <div className='container'>
                        <Link className='navbar-brand' to='/'>IT Books</Link>
                        <div className='navbar-nav'>
                            <Link className='nav-link' to='/' onClick={AuthAPI.logout}>Logout</Link>
                        </div>
                    </div>
                </nav>
            </header>
            {/* using this component to render the next Route in a set of matches */}
            <Outlet />
        </>
    );
}

export default AdminPanel;