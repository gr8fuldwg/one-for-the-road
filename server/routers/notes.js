const express = require('express');
const router = express.Router();
const Note = require('../models/note');


router.get('/', (req, res) => {
  const notes = Note.find();
  res.status(200).json({ notes: notes });
});

router.get('/:id', (req, res) => {
  const note = Note.findById(req.params.id);
  res.status(200).json({ note: note });
});

router.post('/', (req, res) => {
  const { text, coords } = req.body;
  const note = new Note({ text, coords });
  note.save();
  res.status(201).json({ message: 'successful' });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  Note.findByIdAndUpdate(id, { text: text });
  res.status(200).json({ message: 'successful'});
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Note.findByIdAndRemove(id);
  res.status(200).json({ message: 'successfully deleted' });
});




module.exports = router;
