const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('./node_modules/body-parser');
const BlogPost = require('./models/BlogPost.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost:27017/nodejs_blog',
  { useNewUrlParser: true });
app.listen(4000, () => {
  console.log('App listening on port 4000');
});

app.get('/', async (req, res) => {
  const blogposts = await BlogPost.find({});
  res.render('index', {
    blogposts
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/index', async (req, res) => {
  const blogposts = await BlogPost.find({});
  res.render('index', {
    blogposts
  });
});

app.get('/post/:id', async (req, res) => {
  const blogpost = await BlogPost.findById(req.params.id);
  res.render('post', {
    blogpost
  });
});

// Get Handler for new post
app.get('/posts/new', (req, res) => {
  res.render('create');
});

app.post('/posts/store', async (req, res) => {
  await BlogPost.create(req.body);
  res.redirect('/');
});
