const fs = require("fs");
var data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = function(app) {

    app.get('/api/notes', (req, res) => {
        const newNote = req.params.note;

        console.log(newNote);
    for (let i = 0; i < db.length; i++)
            {
                const note = {
                    title: db[i].title,
                    text: db[i].text,
                    id: i
                };
    
                update.push(note);
            }
    });

    app.post('/api/notes', (req, res) =>{
        const newNote = req.body;

        console.log(newNote);
      
        note.push(newNote);
      
        res.json(newNote);
});
}