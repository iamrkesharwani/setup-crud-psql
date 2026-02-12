import db from './db.js';

export const createExpense = async (title, amount, category) => {
  const query = `
    INSERT INTO expenses (title, amount, category)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const res = await db.query(query, [title, amount, category]);
  return res.rows[0];
};

export const selectAllExpenses = async () => {
  const query = 'SELECT * FROM expenses;';
  const res = await db.query(query);
  return res.rows;
};

export const filterExpenseCategory = async (category) => {
  const query = `
    SELECT * FROM expenses
    WHERE category = $1;
  `;
  const res = await db.query(query, [category]);
  return res.rows;
};

export const deleteExpense = async (id) => {
  const query = 'DELETE FROM expenses WHERE id = $1 RETURNING *;';
  const res = await db.query(query, [id]);
  return res.rows[0];
};

export const getTotalAmount = async () => {
  const query = 'SELECT SUM(amount) AS total FROM expenses;';
  const res = await db.query(query);
  return Number(res.rows[0].total) || 0;
};
