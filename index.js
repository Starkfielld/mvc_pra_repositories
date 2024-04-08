const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const userController = require('./controllers/userController');

mongoose.connect('mongodb+srv://Stark:<1234>@cluster1.y5ytgar.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(error => console.error('Error connecting to MongoDB:', error));

app.use(express.json());

app.get('/', userController.getAllUsers);

app.post('/', userController.addUser);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
