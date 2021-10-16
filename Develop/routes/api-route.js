const fs = require("fs");
var data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = function(app) {

    app.get('/api/notes', (req, res) => {
        res.json(data);
    });

    app.post('/api/notes', (req, res) =>{

    });
};