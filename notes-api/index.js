import express from 'express';
import * as notes from './utils/helper.js';

const app = express();
app.use(express.json());

app.post('/create', async (req, res) => {
  try {
    const { title, content } = req.body;
    const createNote = await notes.createNote(title, content);
    res.status(201).json(createNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/notes', async (req, res) => {
  try {
    const getNotes = await notes.getAllNotes();
    res.status(200).json(getNotes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/notes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const getId = await notes.getNoteById(id);
    if (!getId) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json(getId);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/notes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteId = await notes.deleteNoteById(id);
    if (!deleteId) {
      return res.status(404).json({ error: "Delete ID doesn't exist" });
    }
    res.status(204).json(deleteId);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('Server running on PORT 3000'));
