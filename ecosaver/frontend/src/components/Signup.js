import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/login.css';
import axios from 'axios';

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        console.log('Signup button clicked!');

        // Function to get the CSRF token from cookies
        const getCookie = (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        };

        // Get CSRF token
        const csrftoken = getCookie('csrftoken');

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/signup/', {
                username,
                email,
                first_name: firstName,
                last_name: lastName,
                password1,
                password2,
            }, {
                headers: {
                    'X-CSRFToken': csrftoken,
                },
            });

            console.log('Signup Successful:', response.data);
            // You can handle the successful signup here, such as redirecting the user.
        } catch (error) {
            console.error('Signup Error:', error);
            console.log('Error details:', error.response);  // Log the response details

            // You can handle the signup error here, such as displaying an error message.
        }
    };


    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Signup</div>
            </div>
            <br />
            <div className="container">
                <form onSubmit={handleSignup}>
                    <div className="form-field">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div className="form-field">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="form-field">
                        <label htmlFor="first_name">First Name:</label>
                        <input type="text" id="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>

                    <div className="form-field">
                        <label htmlFor="last_name">Last Name:</label>
                        <input type="text" id="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>

                    <div className="form-field">
                        <label htmlFor="password1">Password:</label>
                        <input type="password" id="password1" value={password1} onChange={(e) => setPassword1(e.target.value)} />
                    </div>

                    <div className="form-field">
                        <label htmlFor="password2">Confirm Password:</label>
                        <input type="password" id="password2" value={password2} onChange={(e) => setPassword2(e.target.value)} />
                    </div>

                    {/* Include other form fields as needed */}
                    <button type="submit" className="submit">Sign Up</button>

                    {/* Redirect to login */}
                    <button className="submit">
                        <a href="/login" className="login-link">Login</a>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;