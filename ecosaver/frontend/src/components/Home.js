import React, { useEffect } from 'react';
import '../css/Home.css';


const Home = () => {
    useEffect(() => {
        const setupEventListeners = () => {
            const menuBtn = document.querySelector("#menu-btn");
            const closeBtn = document.querySelector("#close-btn");
            const menu = document.querySelector(".nav_items");

            const handleMenuClick = () => {
                menu.style.display = 'block';
                menuBtn.style.display = 'none';
                closeBtn.style.display = 'inline-block';
            };

            const handleMenuClose = () => {
                menu.style.display = 'none';
                menuBtn.style.display = 'inline-block';
                closeBtn.style.display = 'none';
            };

            window.addEventListener('scroll', () => {
                document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
            });

            menuBtn.addEventListener("click", handleMenuClick);
            closeBtn.addEventListener("click", handleMenuClose);
        };

        // Use DOMContentLoaded event to ensure the DOM is fully loaded
        document.addEventListener('DOMContentLoaded', setupEventListeners);

        return () => {
            // Cleanup: Remove event listeners when the component is unmounted
            window.removeEventListener('scroll', () => { });
            document.removeEventListener('DOMContentLoaded', setupEventListeners);
        };
    }, []);

    return (
        <div > <nav>
            <div className="container nav_container">
                <ul className="nav_items">
                    <li><a href="home">Home</a></li>
                    <li><a href="userprofile">User Profile</a></li>
                    <li><a href="energy"> Energy Analysis</a></li>
                    <li><a href="automation">Home Automation</a></li>
                    <li><a href="virtualassistant">Virtual Assistant</a></li>
                    <li><a href="#">User Documentation</a></li>
                </ul>
                <a href="./index.html" className="nav_logo">  </a>
                <div className="nav_signin-signup">
                    <a href="login">Login</a>
                    <a href="signup" className="btn">Signup</a>


                </div>
                <button className="menu-btn"><img src="./images/menu.png" alt="" /></button>
                <button className="close"><img src="./images/close.png" alt="" /></button>
            </div>
        </nav>
            <header>
                <div className="container header_container">
                    <h1 className=""></h1>
                    <p className="lead">Smart home application are very useful for maintainence</p>
                    <div className="header_image">
                        <img src="./images/hero.png" />
                    </div>
                    <div className="cta">
                        <a href="https://www.apple.com/app-store" className="btn btn-primary" target="_blank">
                            <div className="logo">
                                <img src="./images/Apple-logo.png" alt="" />

                            </div>
                            <span>
                                <small>
                                    Download on the
                                </small>
                                <h4>App Store</h4>
                            </span>
                        </a>
                        <a href="https://www.apple.com/app-store" className="btn btn-primary" target="_blank">
                            <div className="logo">
                                <img src="./images/android.png" alt="" />

                            </div>
                            <span>
                                <small>
                                    Get IT ON
                                </small>
                                <h4>Google Play</h4>
                            </span>
                        </a>
                    </div>
                    <div className="header_socials">
                        <a href="https://facebook.com/apple" target="_blank"></a>
                    </div>
                </div>
                <div className="header_decorator-1">
                    <img src="./images/header-decorator1.png" />
                </div>
                <div className="header_decorator-2">
                    <img src="./images/header-decorator-2.png" />
                </div>
            </header>

            <section id="energy">
                <h1 className="energy_title">Eco Saver</h1>
                <div className="container">
                    <article className="energy_article">
                        <div className="energy_image">
                            <img src="./images/about1.png" />
                        </div>
                        <div className="energy_content">
                            <h2 className="energy_article-title">Smart Home's Smart Services</h2>
                            <p>Energy analysis is a method for gathering information to help make decisions about energy resource allocation. It can also be used to correct errors in economic evaluations that could lead to the misallocation of resources.</p>
                            <a href="./energy.html" className="btn btn-primary">Learn More</a>

                        </div>
                    </article>
                    <article className="energy_article">

                        <div className="energy_content">
                            <h2 className="energy_article-title">Smart Home's Smart Services</h2>
                            <p>Energy analysis is a method for gathering information to help make decisions about energy resource allocation. It can also be used to correct errors in economic evaluations that could lead to the misallocation of resources.</p>

                        </div>
                        <div className="energy_image">
                            <img src="./images/about2.png" />
                        </div>
                    </article>
                </div>

            </section>
            <section id="testimonials">
                <h1>Testimonials</h1>
                <p className=""></p>
                <div className="container testimonials_container">
                    <article className="testimonial">
                        <p>

                            "I'm truly impressed with the Eco Saver web app! It's a game-changer in the realm of IoT and environmental conservation. The real-time data and intuitive interface make it easy for me to monitor and control energy usage. Kudos to the team for creating a tool that empowers individuals to make a positive impact on the planet.

                        </p>
                        <div className="testimonial_client">
                            <div className="avatar">
                                <img src="./images/avatar1.jpg" />
                            </div>
                            <div className="testimonial_work">
                                <p>
                                    <b>Emma Green</b>
                                </p>
                                <small>Environmental Enthusiast</small>
                            </div>
                        </div>
                    </article>

                    <article className="testimonial">
                        <p>
                            "As a homeowner who is passionate about technology, Eco Saver has exceeded my expectations. The smart energy management features have not only helped me reduce my carbon footprint but have also led to significant cost savings. It's the perfect blend of innovation and sustainability."

                        </p>
                        <div className="testimonial_client">
                            <div className="avatar">
                                <img src="./images/avatar2.jpg" />
                            </div>
                            <div className="testimonial_work">
                                <p>
                                    <b>Alex Hernandez</b>
                                </p>
                                <small>Homeowner and Tech Enthusiast</small>
                            </div>
                        </div>
                    </article>
                    <article className="testimonial">
                        <p>
                            "Being in the tech industry, I appreciate the complexity of IoT solutions. Eco Saver, however, stands out for its simplicity and effectiveness. The app seamlessly integrates with various devices, providing a centralized hub for managing energy consumption. It's a must-have for anyone looking to embrace smart living."

                        </p>
                        <div className="testimonial_client">
                            <div className="avatar">
                                <img src="./images/avatar3.jpg" />
                            </div>
                            <div className="testimonial_work">
                                <p>
                                    <b>Mark Johnson</b>
                                </p>
                                <small> IT Professional</small>
                            </div>
                        </div>
                    </article>

                    <article className="testimonial">
                        <p>
                            "Eco Saver has become an integral part of our household. It's not just a tool; it's a lifestyle. The app's ability to adapt to our daily routines and optimize energy usage seamlessly has made us more mindful of our environmental impact. I highly recommend it to fellow parents looking to instill eco-friendly habits in their homes."

                        </p>
                        <div className="testimonial_client">
                            <div className="avatar">
                                <img src="./images/avatar4.jpg" />
                            </div>
                            <div className="testimonial_work">
                                <p>
                                    <b>Sophie Lewis</b>
                                </p>
                                <small> Eco-conscious Parent</small>
                            </div>
                        </div>
                    </article>
                </div>


            </section>
            <footer >
                <div className="container footer_container">
                    <div className="footer-1">

                        <a href="index.html" className="logo"><h3>Eco Saver</h3></a>

                        <p>"Eco Saver" is a concept or product that promotes eco-friendly and energy-efficient solutions for consumers.It's focused on helping individuals and households reduce their environmental footprint and save on energy costs.<br /></p>
                        <div className="footer_subscribe">
                            <input type="email" placeholder="Enter Email" required />
                            <button type="submit"></button>
                        </div>

                    </div>
                    <div className="footer-2">
                        <h4> Permalinks</h4>
                        <ul className="permalinks">
                            <li><a href="./index.html">User Profile</a></li>
                            <li><a href="./energy.html"> Energy Analysis</a></li>
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

export default Home;