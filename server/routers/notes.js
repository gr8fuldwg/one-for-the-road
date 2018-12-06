const express = require('express');
const router = express.Router();
const Note = require('../models/note');


router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json({ notes: notes });
  } catch(e) {
    res.status(500).json({ message: 'Server Error'});
  }
});

router.get('/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.status(200).json({ note: note });
  } catch(e) {
    res.status(500).json({ message: 'Server Error '});
  }
});

router.post('/', async (req, res) => {
  try {
    const { text, coords } = req.body;
    const note = new Note({ text, coords });
    await note.save();
    res.status(201).json({ message: 'successful' });
  } catch(e) {
    res.status(500).json({ message: 'Server Error'});
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    await Note.findByIdAndUpdate(id, { text: text });
    res.status(200).json({ message: 'successful'});
  } catch(e) {
    res.status(500).json({ message: 'Server Error'});
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Note.findByIdAndRemove(id);
  res.status(200).json({ message: 'successfully deleted' });
});

module.exports = router;
