const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/ask', async (req, res) => {
    const { question } = req.body;
    console.log('Pregunta recibida:', question); // Verifica la pregunta recibida
    try {
      const response = await axios.post('https://4dc2-34-125-246-164.ngrok-free.app/ask', { question });
      console.log('Respuesta de la API:', response.data); // Verifica la respuesta de la API
      res.json(response.data);
    } catch (error) {
      console.error('Error en la comunicación con la API:', error); // Imprime detalles del error
      res.status(500).json({ error: 'Error al comunicarse con la API del chatbot.' });
    }
});
  

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
