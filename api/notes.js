const express = require('express');
const notes = require('/db/db.json');
let uniqueID = require('uniqueID');
const router = express.Router();

const fs = require("fs");
const path = require('path');

    router.get('/notes', (req, res) => {
        res.send(notes);
        });
      
        router.post('/notes', (req, res) =>{
            let newNt = req.body;
            newNt.id = uniqueID;
            notes.push(newNt);

            res.send('notes');
        });

         fs.writeFileSync(path.join(__dirname,'/db/db.json', JSON.stringify(notes))

         );
        


module.exports = router;