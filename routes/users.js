const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('¡Hola Amigos! ¿Tienen ganas de cantar y bailar?');
});

module.exports = router;
