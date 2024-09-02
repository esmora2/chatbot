import React from 'react';

const SimpleForm = ({ question, handleQuestionChange, handleSubmit, response }) => {
  return (
    <div className="simple-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe tu pregunta..."
          value={question}
          onChange={handleQuestionChange}
        />
        <button type="submit">Preguntar</button>
      </form>
      {response && <p>Respuesta: {response}</p>}
    </div>
  );
};

export default SimpleForm;
