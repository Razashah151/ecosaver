import React, { useState, useEffect } from 'react';
import '../css/Energy.css';

const Energy = () => {
  const [todayConsumption, setTodayConsumption] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const [gaugePercentage, setGaugePercentage] = useState(0);

  // Function to fetch today's consumption data from Django API
  const fetchTodayConsumption = () => {
    // Make API call to fetch today's consumption data
    fetch('http://localhost:8000/api/energy/') // Ensure the trailing slash
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        // Set today's consumption data
        setTodayConsumption(data[0]);
        // Calculate gauge percentage based on today's consumption
        const maxGaugeValue = 50; // Assuming 50 is the maximum value for the gauge
        const percentage = (data[0] / maxGaugeValue) * 100;
        setGaugePercentage(percentage);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    // Fetch today's consumption data from Django API
    fetchTodayConsumption();
  }, []);

  // Function to calculate total bill based on today's consumption
  const calculateTotalBill = () => {
    const ratePerKWh = 5; // 5 rupees per unit
    const bill = todayConsumption * ratePerKWh;
    setTotalBill(bill.toFixed(2));
  };
  return (
    <div>
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

      <div className="energy">
        <div className="daily-consumption">
          <h2>Today's Consumption</h2>
          <div className="meter-value">{todayConsumption} W</div>
        </div>
        <div className="bill-calculator">
          <h2>Bill Calculator</h2>
          <button className='b1' onClick={calculateTotalBill}>Calculate Bill</button>
          <span className='p1'>Total Bill: RS:{totalBill}</span>
        </div>
        <div className="gauge">
          <div className="gauge__body">
            <div className="gauge__fill" style={{ transform: `rotate(${gaugePercentage * 1.8}deg)` }}></div>
            <div className="gauge__cover">{gaugePercentage.toFixed(0)}%</div>
          </div>
        </div>
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
}

export default Energy;