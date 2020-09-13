const router = require('express').Router();

const fs = require('fs');

router.get('/users', (req, res) => {
  const users = fs.readFileSync('./data/users.json');
  res.send(users);
});

router.get('/users/:id', (req, res) => {
  const users = fs.readFileSync('./data/users.json');
  if (!users[req.params.id]) {
    res.status(404).send({ "message": "Нет пользователя с таким id" });
    return;
  }

  res.send(users[req.params.id]);
});

module.exports = router;