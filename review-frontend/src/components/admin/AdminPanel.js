import { Link, Outlet } from "react-router-dom";

function AdminPanel() {
    return (
        <>
            <header>
                <nav className="navbar">
                    <div className='container'>
                        <Link className='navbar-brand' to='/index.html'>IT Books: AdminPanel</Link>
                        <div className="navbar-nav">
                            <Link className='nav-link' to='/admin/logout'>Logout</Link>
                        </div>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    );
}

export default AdminPanel;