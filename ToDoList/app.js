const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('./routes/Todoroutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://simmonskhadir:fsdevkd@todolist.izmhynp.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', todoRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`To do list is running on port ${PORT}`));
