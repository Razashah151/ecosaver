import React, { useState } from 'react';
import '../css/VirtualAssistant.css';

const Virtual = () => {
  const [userInput, setUserInput] = useState('');
  const [chatbotResponse, setChatbotResponse] = useState('');

  const trigger = [
    ["hi", "hey", "hello"],
    ["how are you", "how is life", "how are things"],
    ["what are you doing", "what is going on"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you"],
    ["your name please", "your name", "may I know your name", "what is your name"],
    ["i love you"],
    ["happy", "good"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story", "tell me joke"],
    ["ah", "yes", "ok", "okay", "nice", "thanks", "thank you"],
    ["bye", "good bye", "goodbye", "see you later"],
    ["bulb not working"],
    ["how to control light"],
    ["no current"]
  ];

  const reply = [
    ["Hi", "Hey", "Hello"],
    ["Fine", "Pretty well", "Fantastic"],
    ["Nothing much", "About to go to sleep", "Can you guess?", "I don't know actually"],
    ["I am 22 years old"],
    ["I am just a bot", "I am a bot. What are you?"],
    ["Ammar Sadouzai", "The coolest guy I know"],
    ["I am nameless", "I don't have a name"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV"],
    ["I will", "What about?"],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself", "You are welcome"],
    ["Bye", "Goodbye", "See you later"],
    ["Check the connection."],
    ["Through home automation."],
    ["Check electricity."],
  ];

  const alternative = ["Oops...", "sorry..."];

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const input = userInput.trim().toLowerCase();
      document.getElementById("user").innerHTML = input;
      output(input);
      setUserInput('');
    }
  };

  const openModal = () => {
    document.getElementById('id01').style.display = 'block';
  };

  const closeModal = () => {
    document.getElementById('id01').style.display = 'none';
  };

  const output = (input) => {
    try {
      const product = input + '=' + eval(input);
      setChatbotResponse(product);
    } catch (e) {
      let text = input.toLowerCase().replace(/[^\w\s\d]/gi, '');
      text = text.replace(/ a /g, ' ').replace(/i feel /g, '').replace(/whats/g, 'what is').replace(/please /g, '').replace(/ please/g, '');

      if (compare(trigger, reply, text)) {
        const product = compare(trigger, reply, text);
        setChatbotResponse(product);
      } else {
        const product = alternative[Math.floor(Math.random() * alternative.length)];
        setChatbotResponse(product);
      }
    }
  };

  const compare = (arr, array, string) => {
    let item;
    for (let x = 0; x < arr.length; x++) {
      for (let y = 0; y < array.length; y++) {
        if (arr[x][y] === string) {
          const items = array[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    return item;
  };

  const speak = (string) => {
    const utterance = new SpeechSynthesisUtterance();
    utterance.voice = speechSynthesis.getVoices().find((voice) => voice.name === "Agnes");
    utterance.text = string;
    utterance.lang = "en-US";
    utterance.volume = 1; // 0-1 interval
    utterance.rate = 1;
    utterance.pitch = 2; // 0-2 interval
    speechSynthesis.speak(utterance);
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
            <li><a href="#">Virtual Assistant</a></li>
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

      <header className="w3-container w3-theme w3-padding" id="myHeader">
        <i onClick={openModal} className="fa fa-bars w3-xlarge w3-button w3-theme"></i>
        <div className="w3-center">
          <h4>Eco Saver Web App</h4>
          <h1 className="w3-xxxlarge w3-animate-bottom">Help Chat</h1>
          <div className="w3-padding-32">
            <button className="w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey" onClick={openModal} style={{ fontWeight: 900 }}>Start Chat</button>
          </div>
        </div>
      </header>

      <div id="id01" className="w3-modal">
        <div className="w3-modal-content w3-card-4 w3-animate-top">
          <header className="w3-container w3-theme-l1">
            <span onClick={closeModal} className="w3-button w3-display-topright">X</span>
            <div className="w3-center">
              <h4>Welcome to Virtual Assistant</h4>
            </div>
          </header>

          <div className="w3-full w3-row-padding w3-margin-top w3-padding w3-card w3-container" style={{ minHeight: '460px' }}>
            <div className="w3-center">
              <i className="fa fa-desktop w3-margin-bottom w3-margin-top w3-text-theme" style={{ fontSize: '125px' }}></i>
            </div>
            <h5>
              <ul>My name is Chat bot. How Can I help you?</ul>
            </h5>
            <t className="w3-margin-bottom w3-text-theme" style={{ fontSize: '25px' }}>
              <div id="main">
                <div>You: <span id="user">{userInput}</span></div>
              </div>

              <t className="w3-margin-bottom w3-text-theme" style={{ fontSize: '25px' }}>
                <div>Chat bot: <span id="chatbot">{chatbotResponse}</span></div>
              </t>
              <div>
                <div className="w3-center w3-margin-top">
                  <input
                    id="input"
                    type="text"
                    placeholder="Enter your question..."
                    autoComplete="on"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                  />
                </div>
              </div>
            </t>
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
};

export default Virtual;