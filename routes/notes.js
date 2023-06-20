const notes = require('express').Router();
const fs = require('fs');
const uuid = require('../helpers/uuid.js');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const cLog = require('../helpers/cLog.js'); /*for logging time*/

// API!
// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  // Log our request to the terminal
  //console.info(`${req.method} request received to get reviews`);
  cLog(`${req.method} request received to get notes`);

  // Obtain the existing notes:
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      let notes = JSON.parse(data);


      const response = notes;

      //console.log(response);
      res.status(201).json(response);
    } 
  });

});


// POST request to add a new Note
notes.post('/', (req, res) => {
  // Log that a POST request was received
  //console.info(`${req.method} request received to add a note`);
  cLog(`${req.method} request received to add a note`);

  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    // Obtain the existing notes:
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        let notes = JSON.parse(data);

        //console.log(notes);

        notes.push(newNote); 

        fs.writeFile(`./db/db.json`, JSON.stringify(notes, null, 2), (err) =>
        err
          ? console.error(err)
          : cLog(
              `Note for ${newNote.title} has been added to JSON file`
            )
        );        
      }
    })

    const response = {
      status: 'success',
      body: newNote,
    };

    //console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json('Error in posting note');
  }
});


// DELETE request to delete a Note
notes.delete('/:id', (req, res) => {
  // Log that a POST request was received
  cLog(`${req.method} request received to delete a note`);

  const id = req.params.id;

  // make sure id is found to delete
  if (id) {

    // Obtain the existing notes:
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        let notes = JSON.parse(data);

        //console.log(notes);
        var deleteNoteTitle = ""; 
        //find the corresponding note:
        let index = notes.findIndex(item => item.id === id);        
        // if the object was found in the array, remove it
        if (index !== -1) {
          deleteNoteTitle = notes[index].title;
          notes.splice(index, 1);
        }

        fs.writeFile(`./db/db.json`, JSON.stringify(notes, null, 2), (err) =>
        err
          ? console.error(err)
          : cLog(
              `Note for ${deleteNoteTitle} with id ${id} has been deleted`
            )
      );        
      }
    })

    const response = {
      status: 'success',
      body: id,
    };

    //console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json('Error in deleting note');
  }
});

// UPDATE request to upate a Note
notes.put('/:id', (req, res) => {
  // Log that a POST request was received
  cLog(`${req.method} request received to update a note`);

  const id = req.params.id;
  const { title, text } = req.body;

  // make sure id is found to delete
  if (id) {

    // Obtain the existing notes:
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        let notes = JSON.parse(data);

        //find the corresponding note:
        let index = notes.findIndex(item => item.id === id);        
        // if the object was found in the array, update the note
        if (index !== -1) {
          notes[index].title = title;
          notes[index].text = text
        }

        fs.writeFile(`./db/db.json`, JSON.stringify(notes, null, 2), (err) =>
        err
          ? console.error(err)
          : cLog(
              `Note for ${title} with id ${id} has been updated`
            )
      );        
      }
    })

    const response = {
      status: 'success',
      body: id,
    };

    //console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json('Error in deleting note');
  }
});







module.exports = notes;
