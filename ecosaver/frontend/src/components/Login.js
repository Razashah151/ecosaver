import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
// import { SocialLogin, FacebookLoginButton } from 'react-social-login-buttons';
import "../css/Login.css";
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', {
                username,
                password,
            });

            console.log('Login Successful:', response.data);

            // Use the navigate function to redirect to the HomeAutomation page
            navigate('/home');
        } catch (error) {
            console.error('Login Error:', error);
            // You can handle the login error here, such as displaying an error message.
        }

    };
    const handleSocialLogin = (data) => {
        console.log(data);
        // Use the data object to process social login information
        // ...your logic here...
        navigate('/home');
    };

    return (
        <div>
            <h2>Login</h2>
            <div className="container">
                <form onSubmit={handleLogin}>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <br />
                    <button type="submit" className="submit">
                        Login
                    </button>
                    <button className="submit">
                        <Link to="/signup" className="signup-link">
                            Signup
                        </Link>
                    </button>
                    <GoogleOAuthProvider clientId="367607079579-af0iv2urmumbluamp139t26pi7cmfsq8.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={(credentialResponse) => {
                                const decoded = jwtDecode(credentialResponse.credential);
                                console.log(decoded);
                                navigate('/home')
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </GoogleOAuthProvider>

                    {/* <SocialLogin
                        trigger={<FacebookLoginButton appId="375980704954948" />}
                        providers={['facebook']}
                        onLoginSuccess={handleSocialLogin}
                        onLoginFailure={(error) => console.error(error)}
                    /> */}
                </form>
            </div>
        </div>
    );
};


export default LoginForm;
