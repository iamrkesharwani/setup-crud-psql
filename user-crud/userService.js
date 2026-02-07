import db from './db.js';

export const createUser = async (name, email) => {
  const query = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *';
  const { rows } = await db.query(query, [name, email]);
  return rows[0];
};

export const getAllUser = async () => {
  const query = 'SELECT * FROM users ORDER BY id ASC';
  const { rows } = await db.query(query);
  return rows;
};

export const getSingleUser = async (id) => {
  const query = 'SELECT * FROM users WHERE id = $1';
  const { rows } = await db.query(query, [id]);
  return rows[0];
};

export const updateUser = async (name, id) => {
  const query = 'UPDATE users SET name = $1 WHERE id = $2 RETURNING *';
  const { rows } = await db.query(query, [name, id]);
  return rows[0];
};

export const deleteUser = async (id) => {
  const query = 'DELETE FROM users WHERE id = $1 RETURNING *';
  const { rows } = await db.query(query, [id]);
  return rows[0];
};
