import db from './db.js';

export const createProduct = async (productData) => {
  const { name, price, description, in_stock } = productData;
  const query = `
    INSERT INTO products (name, price, description, in_stock)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `;
  const values = [name, price, description, in_stock];
  const { rows } = await db.query(query, values);
  return rows[0];
};

export const readAllProducts = async () => {
  const query = 'SELECT * FROM products ORDER BY created_at DESC';
  const { rows } = await db.query(query);
  return rows;
};

export const updateProduct = async (status, id) => {
  const query = 'UPDATE products SET in_stock = $1 WHERE id = $2 RETURNING *';
  const { rows } = await db.query(query, [status, id]);
  return rows[0];
};
