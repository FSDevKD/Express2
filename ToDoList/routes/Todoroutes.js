const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem');

router.get('/', async (req, res) => {
  const todoItems = await TodoItem.find();
  res.render('index', { todoItems });
});

router.post('/add', async (req, res) => {
  const todoItem = new TodoItem({ text: req.body.text });
  await todoItem.save();
  res.redirect('/');
});

router.post('/clear', async (req, res) => {
  await TodoItem.deleteMany();
  res.redirect('/');
});

router.post('/finish', async (req, res) => {
  await TodoItem.updateMany({ completed: false }, { completed: true });
  res.redirect('/');
});

module.exports = router;
