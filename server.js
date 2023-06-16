const express = require('express');
const path = require('path');
const fs = require('fs');
// Helper method for generating unique ids
const uuid = require('./helpers/uuid');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);


// API!
// GET request for reviews
app.get('/api/notes', (req, res) => {
  // Send a message to the client
  //res.json(`${req.method} request received to get reviews`);
  // Log our request to the terminal
  console.info(`${req.method} request received to get reviews`);

  // Obtain the existing reviews:
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      let notes = JSON.parse(data);

      console.log(notes);

      const response = notes;

      console.log(response);
      res.status(201).json(response);
    } 
  });

});


// POST request to add a new Note
app.post('/api/notes', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);

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


    // Convert the data to a string so we can save it
    //const reviewString = JSON.stringify(newReview);

    // Obtain the existing reviews:
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        let notes = JSON.parse(data);

        console.log(notes);

        notes.push(newNote); 

        fs.writeFile(`./db/db.json`, JSON.stringify(notes, null, 2), (err) =>
        err
          ? console.error(err)
          : console.log(
              `Note for ${newNote.title} has been added to JSON file`
            )
      );        
      }
    })

    const response = {
      status: 'success',
      body: newNote,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json('Error in posting note');
  }
});

// DELETE request to delete a Note
app.delete('/api/notes/:id', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);

  const id = req.params.id;
  console.log(id);

  // make sure id is found to delete
  if (id) {

    // Obtain the existing reviews:
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        let notes = JSON.parse(data);

        console.log(notes);
        let deleteNoteTitle = ""; 
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
          : console.log(
              `Note for ${deleteNoteTitle} with id ${id} has been deleted`
            )
      );        
      }
    })

    const response = {
      status: 'success',
      body: currentNote,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json('Error in deleting note');
  }
});


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
