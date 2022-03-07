import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className='container'>
                <Link className='navbar-brand' to='/index.html'>IT Books</Link>
            </div>
        </header>
    );
}

export default Header;