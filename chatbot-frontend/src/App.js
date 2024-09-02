import React, { useState } from 'react';
import SimpleForm from './components/SimpleForm';
import ImageCarousel from './components/ImageCarousel';
import ImageIcons from './components/ImageIcons';
import VerticalNavbar from './components/VerticalNavbar';
import './App.css';
import espeLogo from './img/espelogo.png';
import cbotlogo from './img/cbotespe.png';
import userIcon from './img/user.png';

const App = () => {
  const [showChat, setShowChat] = useState(false);
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);

  const startChat = () => setShowChat(true);
  const hideChat = () => setShowChat(false);

  const handleQuestionChange = (e) => setQuestion(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMessage = { text: question, sender: 'user' };
    setMessages([...messages, newMessage]);

    try {
      const res = await fetch('http://localhost:5000/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      const botMessage = { text: data.response || 'Sin respuesta disponible', sender: 'bot' };
      setMessages([...messages, newMessage, botMessage]);
    } catch (error) {
      const errorMessage = { text: 'Error al obtener respuesta.', sender: 'bot' };
      setMessages([...messages, newMessage, errorMessage]);
    }

    setQuestion('');
  };

  return (
    <div className="app-container">
      <div className="header">
        <img src={cbotlogo} alt="Logo del Chatbot" className="header-logo" />
      </div>
      <div className="main">
        <div className="nav">
          <img src={espeLogo} alt="Logo ESPE" className="logo" />
          <ImageCarousel />
          <ImageIcons />
        </div>
        <div className="content">
          <div style={{ padding: '20px' }}>
            <h1>Bienvenido al portal de Chatbot ESPE</h1>
            <VerticalNavbar />
            <p>Para más información o ayuda</p>
            <p>utilice el chatbot para hacer sus preguntas relacionadas con la universidad.</p>
          </div>
        </div>
      </div>
      <div className="footer">Chatbot Espe © 2024 - Todos los Derechos Reservados</div>
      <div className="bot">
        {showChat && (
          <div className="chat-container">
            <div className="chat-header">
              <h2>Chatbot ESPE</h2>
              <img src={cbotlogo} alt="Logo del Chatbot" />
            </div>
            {messages.map((msg, index) => (
              <div key={index} className={`chat-bubble ${msg.sender}`}>
                {msg.sender === 'user' && (
                  <>
                    <img src={userIcon} alt="User icon" className="icon user-icon" />
                    <div>{msg.text}</div>
                  </>
                )}
                {msg.sender === 'bot' && (
                  <>
                    <div>{msg.text}</div>
                    <img src={cbotlogo} alt="Bot icon" className="icon bot-icon" />
                  </>
                )}
              </div>
            ))}
            <SimpleForm
              question={question}
              handleQuestionChange={handleQuestionChange}
              handleSubmit={handleSubmit}
            />
          </div>
        )}
        <div>
          {!showChat 
            ? <button className="btn" onClick={startChat}>Click para chatear ↑↑</button>
            : <button className="btn" onClick={hideChat}>Click para ocultar  ↓↓</button>}
        </div>
      </div>
    </div>
  );
};

export default App;
