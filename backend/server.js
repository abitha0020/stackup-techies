require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express(); // Initialize the Express application
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB ...'))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Listening on :${PORT}`);
});
module.exports = app;