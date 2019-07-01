const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

// Define Routes
app.use('/api/users', require('./routes/users'));

app.listen(PORT, function() {
  var datetime = new Date();
  var message =
    'Server runnning on Port:- ' + PORT + ' Started at :- ' + datetime;
  console.log(message);
});
