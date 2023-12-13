import React, { useState } from 'react';
import axios from 'axios';
import "../css/Automation.css";
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





  return (
    <div>
      <header>
        <h1>Home Automation</h1>
      </header>
      <section>
        <img src={`./images/bulb-${bulbStatus.toLowerCase()}.png`} id="bulb" width="200" alt="Bulb" />
        <div className="btn_container">
          <button id="on" className="bulb_btn" onClick={bulbOn}>
            On
          </button>
          <button id="off" className="bulb_btn" onClick={bulbOff}>
            Off
          </button>
        </div>
        <div className="status_container">
          <p>
            Status: <span id="bulbStatus">{bulbStatus}</span>
          </p>
        </div>
        <div className="toggle_container">
          <label className="switch">
            <span className="slider round"></span>
          </label>
        </div>
      </section>
    </div>
  );
};

export default Automation;
