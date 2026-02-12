import db from './db.js';

export const createNote = async (title, content) => {
  const query = `
    INSERT INTO notes (title, content)
    VALUES ($1, $2)
    RETURNING *;
  `;
  const res = await db.query(query, [title, content]);
  return res.rows[0];
};

export const getAllNotes = async () => {
  const query = 'SELECT * FROM notes;';
  const res = await db.query(query);
  return res.rows;
};

export const getNoteById = async (id) => {
  const query = 'SELECT * FROM notes WHERE id = $1;';
  const res = await db.query(query, [id]);
  return res.rows[0];
};

export const deleteNoteById = async (id) => {
  const query = 'DELETE FROM notes WHERE id = $1 RETURNING *;';
  const res = await db.query(query, [id]);
  return res.rows[0];
};
