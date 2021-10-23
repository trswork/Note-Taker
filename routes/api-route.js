const fs = require("fs");
let notes = require("/db/db.json")

module.exports = function(app) {
    app.get('/api/notes', function(req, res) {
        fs.readFile('./db/db.json', (err, data) => {
          if (err) throw err;
          dbResults = JSON.parse(data);
          res.send(dbResults);
        });
      });
      
      
        app.post('/api/notes', function(req, res) {
            const newNotes = req.body;
        
            fs.readFile('./db/db.json', (err, data) => {
              if (err) throw err;
              dbResults = JSON.parse(data);
              dbResults.push(newNotes);
              let number = 1;
              dbResults.forEach((note, index) => {
                note.id = number;
                number++;
                return dbResults;
              });
              console.log(dbResults);
        
              stringData = JSON.stringify(dbResults);
        
              fs.writeFile('./db/db.json', stringData, (err, data) => {
                if (err) throw err;
              });
            });
            res.status(204).send();
          });
    };
