/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const users = require('./routes/users');
const cards = require('./routes/cards');
const errorpage = require('./routes/404');

const { PORT = 3000, BASE_PATH } = process.env;

const app = express();
app.use('/', users);
app.use('/', cards);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', errorpage);
app.listen(PORT, () => {
  console.log('Ссылка на сервер:');
  console.log(BASE_PATH);
});
