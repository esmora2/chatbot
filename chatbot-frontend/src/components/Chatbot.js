import React, { useState } from 'react';
import SimpleForm from './components/SimpleForm';
import ImageCarousel from './components/ImageCarousel';
import './App.css';

const App = () => {
  const [showChat, setShowChat] = useState(false);
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]); // Array para almacenar el historial de mensajes

  const startChat = () => setShowChat(true);
  const hideChat = () => setShowChat(false);

  const handleQuestionChange = (e) => setQuestion(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMessage = { text: question, sender: 'user' }; // Crear el mensaje del usuario
    setMessages([...messages, newMessage]); // Agregar el mensaje al historial

    try {
      const res = await fetch('http://localhost:5000/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      const botMessage = { text: data.response || 'Sin respuesta disponible', sender: 'bot' };
      setMessages([...messages, newMessage, botMessage]); // Agregar la respuesta del bot
    } catch (error) {
      const errorMessage = { text: 'Error al obtener respuesta.', sender: 'bot' };
      setMessages([...messages, newMessage, errorMessage]);
    }

    setQuestion(''); // Limpiar el campo de pregunta
  };

  return (
    <>
      <div className="header">
        <h2>Asistente Universitario</h2>
      </div>
      <div className="main">
        <div className="nav">
          <h3>Navegación</h3>
          <ImageCarousel /> {/* Agrega el carrusel aquí */}
        </div>
        <div className="content">
          <div style={{ padding: '20px' }}>
            <h1>Bienvenido al Chatbot de ESPE</h1>
            <p>Por favor, use el chatbot para hacer sus preguntas relacionadas con la universidad.</p>
            {/* Nueva sección de Páginas Sugeridas */}
            <div className="suggested-pages">
              <h3>Páginas Sugeridas</h3>
              <div className="page-link">
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google</a>
              </div>
              <div className="page-link">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
              </div>
              <div className="page-link">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
              <div className="page-link">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">Footer</div>
      <div className="bot">
        {showChat && (
          <div className="chat-container">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-bubble ${msg.sender}`}>
                {msg.text}
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
            ? <button className="btn" onClick={startChat}>Click para chatear...</button>
            : <button className="btn" onClick={hideChat}>Click para ocultar...</button>}
        </div>
      </div>
    </>
  );
};

export default App;
