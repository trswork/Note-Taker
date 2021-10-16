const express = require('express');
const fs = require("fs");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

 // app.get('/add', (req, res) => {
   // res.sendFile(path.join(__dirname, 'notes.html'));
 // });

  ///app.post('/api/characters', (req, res) => {
   // res.json(db.json);
//});


app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });