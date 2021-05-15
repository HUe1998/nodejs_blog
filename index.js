const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(4000, () => {
  console.log('App listening on port 4000');
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/index', (req, res) => {
  res.render('index');
});

app.get('/post', (req, res) => {
  res.render('post');
});
