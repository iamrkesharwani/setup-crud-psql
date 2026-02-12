CREATE TABLE expenses (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  amount NUMERIC(10, 2) NOT NULL,
  category TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);