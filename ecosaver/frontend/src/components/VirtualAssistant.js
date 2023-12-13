import React, { useState } from 'react';
import '../css/VirtualAssistant.css'

const VirtualAssistant = () => {
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
    // Add your logic to open the modal here
    document.getElementById('id01').style.display = 'block';
  };

  const closeModal = () => {
    // Add your logic to close the modal here
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
      <html>
        <head>
          <title>Chatbot</title>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
          <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-black.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css" />
        </head>
        <body>
          {/* Side Navigation */}
          <nav className="w3-sidebar w3-bar-block w3-card w3-animate-left w3-center" style={{ display: 'none' }} id="mySidebar">
            <h1 className="w3-xxxlarge w3-text-theme">Side Navigation</h1>
            <button className="w3-bar-item w3-button" onClick={closeModal}>Close <i className="fa fa-remove"></i></button>
            <a href="#" className="w3-bar-item w3-button">Link 1</a>
            <a href="#" className="w3-bar-item w3-button">Link 2</a>
            <a href="#" className="w3-bar-item w3-button">Link 3</a>
            <a href="#" className="w3-bar-item w3-button">Link 4</a>
          </nav>

          {/* Header */}
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

          {/* Modal */}
          <div id="id01" className="w3-modal">
            <div className="w3-modal-content w3-card-4 w3-animate-top">
              <header className="w3-container w3-theme-l1">
                <span onClick={closeModal} className="w3-button w3-display-topright">X</span>
                <div className="w3-center">
                  <h4>Welcome to Virtual Assistant</h4>
                </div>
              </header>

              {/* Chat Window */}
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

              <footer className="w3-container w3-theme-l1">

              </footer>
            </div>
          </div>
        </body>
      </html>
    </div>
  );
};

export default VirtualAssistant;