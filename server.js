const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

// Route pour obtenir des réponses de l'IA
app.post('/chat', async (req, res) => {
  const { message } = req.body;
  try {
    const response = await axios.post('https://api.darkgpt.com/chat', { message });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la communication avec l\'API' });
  }
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
