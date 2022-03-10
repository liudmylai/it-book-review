import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../../contexts/AdminContext';
import * as AuthAPI from '../../services/auth-api';

// rendering the loging form
function Login() {
    const { setIsUserLoggedIn } = useContext(AdminContext);
    // state to store user credentials and error message
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
        hasLoginFailed: false,
        errorMessage: null
    });
    const navigate = useNavigate();

    // handling user login process
    function clickLogin() {
        AuthAPI.login(loginData.username, loginData.password)
            .then(() => {
                // if the user is successfully authenticated, then register this in sessionStorage
                AuthAPI.registerSuccessfulLogin(loginData.username);
                // set the state
                setIsUserLoggedIn(true);
                // and redirect to admin panel
                navigate('/admin');
            }).catch(error => {
                let message = error.message;
                if (error.response && error.response.status === 401) {
                    message = 'Invalid Credentials';
                } else if (error.response && error.response.status === 403) {
                    message = 'Access Forbidden';
                }
                setLoginData(prev => ({ ...prev, hasLoginFailed: true, errorMessage: message }));
            })
    };
    
    // handling contlolled form input
    function handleChange(event) {
        const { name, value } = event.target;
        setLoginData(prev => ({ ...prev, [name]: value }));
    }

    return (
        <section className='section text-muted'>
            <div className='container'>
                <div className='mb-3'>
                    <div className='alert alert-success' role='alert'>
                        <h6>Username: admin</h6>
                        <h6>Password: admin</h6>
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor='username' className='form-label'>Username:</label>
                    <input type='text' className='form-control' id='username' name='username' value={loginData.username} onChange={handleChange} autoComplete='username' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='form-label'>Password</label>
                    <input type='password' className='form-control' id='password' name='password' value={loginData.password} onChange={handleChange} autoComplete='current-password' />
                </div>
                <div className='mb-3'>
                    <button type='submit' className='btn btn-primary' onClick={clickLogin}>Login</button>
                </div>
                {loginData.hasLoginFailed &&
                    <div className='mb-3'>
                        <div className='alert alert-warning'>{loginData.errorMessage}</div>
                    </div>
                }
            </div>
        </section>
    );
}

export default Login;