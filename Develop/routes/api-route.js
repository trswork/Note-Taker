const fs = require("fs");
var data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = function(app) {

    app.get('/api/notes', (req, res) => {
        fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data));
    });

    app.post('/api/notes', (req, res) =>{
        fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", (err, data) => {
            if (err) throw err;
            const db = JSON.parse(data);
            const  update= [];
    
            db.push(req.body);
    
            for (let i = 0; i < db.length; i++)
            {
                const note = {
                    title: db[i].title,
                    text: db[i].text,
                    id: i
                };
    
                update.push(note);
            }
    
            fs.writeFile(path.join(__dirname, "/db/db.json"), JSON.stringify(update, null, 2), (err) => {
                if (err) throw err;
                res.json(req.body);
            });
        });
    });
});
};