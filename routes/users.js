const router = require('express').Router();

const fs = require('fs');

router.get('/users', (req, res) => {
  try {
    const buff = fs.readFileSync('./data/users.json');
    const users = JSON.parse(buff);
    res.send(users);
  } catch (error) {
    res.status(500).send({ message: 'Произошла ошибка' });
  }
});

router.get('/users/:_id', (req, res) => {
  try {
    const buff = fs.readFileSync('./data/users.json');
    const users = JSON.parse(buff);
    const user = users.find((elem) => {
      // eslint-disable-next-line no-underscore-dangle
      if (elem._id === req.params._id) {
        return true;
      }
      return false;
    });
    if (user === undefined) {
      res.status(404).send({ message: 'Нет пользователя с таким id' });
      return;
    }

    res.send(user);
  } catch (error) {
    res.status(500).send({ message: 'Произошла ошибка' });
  }
});

module.exports = router;
// ESlint Ругается на нижнее подчеркивание в 20-ой строке, но единственный вариант
// как его исправить - это внести правки в файл "users.json", заменив там "_id" на "id"
