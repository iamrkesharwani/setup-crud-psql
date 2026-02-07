import db from './db.js';

const getAllUsers = async (id) => {
  try {
    const queryText = 'SELECT * FROM users WHERE id = $1';
    const values = [id];

    const result = await db.query(queryText, values);

    if (result.rows.length === 0) {
      console.log(`User with ID ${id} not found`);
    } else {
      console.log(`User ID ${id} data:`);
      console.table(result.rows);
    }
  } catch (error) {
    console.error('Connection error:', error.message);
  }
};

getAllUsers(1);
