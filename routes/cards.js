const router = require('express').Router();
const fs = require('fs');

router.get('/cards', (req, res) => {
  const cards = fs.readFileSync('./data/cards.json');
  res.send(cards);
});

module.exports = router;