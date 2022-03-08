import { useEffect, useState } from "react";
import * as AuthAPI from "../../services/auth-api";

function Login() {
    const [errorMessage, setErrorMessage] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
        setIsSubmitted(true);
    };

    useEffect(() =>
        isSubmitted && AuthAPI.login(loginData)
            .finally(() => setIsSubmitted(false))
        , [isSubmitted]
    );

    function handleChange(event) {
        const { name, value } = event.target;
        setLoginData(prev => ({ ...prev, [name]: value }));
    }

    return (
        <section className='section text-muted'>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username:</label>
                        <input type="text" className="form-control" id="username" name="username" value={loginData.username} onChange={handleChange} autoComplete="username" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={loginData.password} onChange={handleChange} autoComplete="current-password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {errorMessage && <div className="error">{errorMessage.message}</div>}
                </form>
            </div>
        </section>
    );
}

export default Login;