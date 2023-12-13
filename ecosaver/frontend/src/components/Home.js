import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/Home.css"

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const heading = document.querySelector('.text-container h1');
    heading.classList.add('show');
  }, []);

  const toggleBtn = () => {
    const btn = document.getElementById('btn');
    const light = document.getElementById('light');
    btn.classList.toggle('active');
    light.classList.toggle('on');
  };

  return (
    <div>
      <div className="hero">
        <div className="nav">
          <img src="./images/eco-bulb.png" className="logo" alt="Eco Bulb Logo" />
          <ul>
            <li>
              <button className="btn2">User Profile</button>
            </li>
            <li>
              <button className="btn2">Energy Analysis</button>
            </li>
            <li>
              <button className="btn2" onClick={() => navigate('/automation')}>
                Home Automation
              </button>
            </li>
            <li>
              <button className="btn2" onClick={() => navigate('/virtualassistant')}>
                Virtual Assistant</button>
            </li>
            <li>
              <button className="btn2">User Training</button>
            </li>
          </ul>
          <button className="btn1" onClick={toggleBtn} id="btn">
            <span></span>
          </button>
        </div>
        <div className="lamp-Container">
          <img src="./images/lamp.png" className="lamp" alt="Lamp" />
          <img src="./images/light.png" className="light" id="light" alt="Light" />
        </div>
        <div className="text-container">
          <h1>Eco Saver</h1>
          <p>
            "Eco Saver" is a concept or product that promotes eco-friendly and energy-efficient solutions for consumers.
            It's focused on helping individuals and households reduce their environmental footprint and save on energy costs.
            <br />

          </p>
          <br></br>
          <button className="btn2">
            Check All Connection
          </button>
          <div className="control">
            <p>&copy;</p>
            <div className="line">
              <span></span>
            </div>
            <p>&copy;</p>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <p>&copy; Eco Saver. All Rights Reserved.</p>
        </div>
      </footer>
      <div className="header">
        <div className="side-nav">
          <div className="user">
            <img src="./images/user.png" className="user-img" alt="User" />
            <div>
              <h2>Eco Saver</h2>
              <p>xyz@gmail.com</p>
            </div>
            <img src="./images/star.png" className="star-img" alt="Star" />
          </div>
          <ul>
            <li>
              <img src="./images/dashboard.png" alt="Dashboard Icon" />
              <p>Dashboard</p>
            </li>
            <li>
              <img src="./images/reports.png" alt="Reports Icon" />
              <p>Report</p>
            </li>
            <li>
              <img src="./images/messages.png" alt="Messages Icon" />
              <p>Message</p>
            </li>
            <li>
              <img src="./images/projects.png" alt="Projects Icon" />
              <p>Project</p>
            </li>
          </ul>
          <ul>
            <li>
              <img src="./images/logout.png" alt="Logout Icon" />
              <a href="/login">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
