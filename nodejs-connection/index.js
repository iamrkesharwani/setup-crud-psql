import db from './db.js';

const getAllUsers = async () => {
  try {
    const result = await db.query('SELECT * FROM users');
    console.log('--- Connection Successful ---');
    console.table(result.rows);
  } catch (error) {
    console.error('Connection error:', error.message);
  }
};

getAllUsers();
