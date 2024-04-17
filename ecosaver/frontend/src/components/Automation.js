import React, { useState } from 'react';
import axios from 'axios';
import '../css/Automation.css';

const Automation = () => {
    const [bulbStatus, setBulbStatus] = useState('Off');

    const bulbOn = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/turn_on/');
            console.log(response.data);
            setBulbStatus('On');
        } catch (error) {
            console.error('Error turning the bulb on:', error);
        }
    };

    const bulbOff = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/turn_off/');
            console.log(response.data);
            setBulbStatus('Off');
        } catch (error) {
            console.error('Error turning the bulb off:', error);
        }
    };

    const toggleSwitch = () => {
        // Define toggleSwitch functionality here
        console.log('Toggle switch clicked');
    };

    return (
        <div>
            <div className='navbar'> {/* Move the navbar outside of the main container */}
                <nav>
                    <div className="container nav_container">
                        <ul className="nav_items">
                            <li><a href="home">Home</a></li>
                            <li><a href="#">User Profile</a></li>
                            <li><a href="energy">Energy Analysis</a></li>
                            <li><a href="automation">Home Automation</a></li>
                            <li><a href="virtualassistant">Virtual Assistant</a></li>
                            <li><a href="#">User Documentation</a></li>
                        </ul>
                        <a href="./index.html" className="nav_logo">  </a>
                        <div className="nav_signin-signup">
                            <a href="#">Login</a>
                            <a href="#" className="btn">Signup</a>
                        </div>
                        <button className="menu-btn"><img src="./images/menu.png" alt="" /></button>
                        <button className="close"><img src="./images/close.png" alt="" /></button>
                    </div>
                </nav>
            </div>
            <div className="automation-container"> {/* Encapsulate in a specific class */}
                <header className="automation-header"> {/* Add a specific class */}
                    <h1>Home Automation</h1>
                </header>
                <section className="automation-section"> {/* Add a specific class */}
                    <img src="./images/bulb-off.png" id="bulb" width="150" alt="Bulb" />
                    <div className="btn_container">
                        <button id="on" className="bulb_btn" onClick={bulbOn}>On</button> {/* Use bulbOn */}
                        <button id="off" className="bulb_btn" onClick={bulbOff}>Off</button> {/* Use bulbOff */}
                    </div>
                    <div id="status" className="status_container">
                        <p>Status: <span id="bulbStatus">{bulbStatus}</span></p> {/* Display bulbStatus */}
                    </div>

                </section>
            </div>
            <footer>
                <div className="container footer_container">
                    <div className="footer-1">
                        <a href="index.html" className="logo"><h3>Eco Saver</h3></a>
                        <p>"Eco Saver" is a concept or product that promotes eco-friendly and energy-efficient solutions for consumers. It's focused on helping individuals and households reduce their environmental footprint and save on energy costs.</p>
                        <div className="footer_subscribe">
                            <input type="email" placeholder="Enter Email" required />
                            <button type="submit"></button>
                        </div>
                    </div>
                    <div className="footer-2">
                        <h4>Permalinks</h4>
                        <ul className="permalinks">
                            <li><a href="./index.html">User Profile</a></li>
                            <li><a href="./energy.html">Energy Analysis</a></li>
                            <li><a href="./home_automation.html">Home Automation</a></li>
                            <li><a href="./index.html">Virtual Assistant</a></li>
                            <li><a href="./index.html">User Documentation</a></li>
                        </ul>
                    </div>
                    <div className="footer-3">
                        <h4>Primacy</h4>
                        <ul className="privacy">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms and Condition</a></li>
                        </ul>
                    </div>
                    <div className="footer-4">
                        <h4>Contact Us</h4>
                        <p>
                            +01-3782628 <br />
                            ecosaver@gmail.com
                        </p>
                    </div>
                </div>
                <div className="copyright">
                    <small>Copyright &copy; All Right Reserved</small>
                </div>
            </footer>
        </div>

    );
};

export default Automation;
