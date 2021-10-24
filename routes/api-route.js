const fs = require("fs");

module.exports = function(app) {
    app.get('/api/notes', (req, res) => {
        fs.readFile(path.join(__dirname + 'db/db.json', (err, data) => {
          if (err) {
              throw err
        }
        res.json(JSON.parse(data))
      })
        )}
    )
      
      
        app.post('/api/notes', (req, res) => {
            let savedNt = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
            let newNt = req.body;
            let noteID = (savedNt.length).toString();
            newNt.id = noteID;
            savedNt.push(newNote);
        
            fs.writeFileSync("db/db.json", JSON.stringify(savedNt));
            console.log("Note saved to db.json. Content: ", newNt);
            res.json(savedNt);
        })

        fs.writeFileSync("db/db.json", JSON.stringify(savedNt));
        res.json(savedNt);
    };
