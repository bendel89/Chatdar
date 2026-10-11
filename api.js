const axios = require('axios');

axios.get('https://api.example.com/users/123')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erreur lors de l\'appel de l\'API:', error);
  });
