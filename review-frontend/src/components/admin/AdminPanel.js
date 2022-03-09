import { Link, Outlet } from 'react-router-dom';
import * as AuthAPI from '../../services/auth-api';

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
            <Outlet />
        </>
    );
}

export default AdminPanel;