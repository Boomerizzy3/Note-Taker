const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the tips
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newTip = {
        title,
        text,
        note_id: uuid(),
      };
  
      readAndAppend(req.body, './db/db.json');
      res.json(`note added successfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
  });

module.exports = notes;
