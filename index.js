const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost:27017/nodejs_blog',
    {useNewUrlParser: true});
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

// Get Handler for new post
app.get('/posts/new',(req,res)=>{
  res.render('create');
});

app.post('/posts/store',(req,res)=>{
  console.log(req.body);
  res.redirect('/');
});
