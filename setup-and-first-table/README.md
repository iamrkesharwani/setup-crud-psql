# Setup and First Table

A foundational project implementing a production-ready PostgreSQL schema and basic CRUD operations using raw SQL.

## Setup Instructions

### 1. Initialize Database:

```sql
CREATE DATABASE myapp
```

### 2. Connect to Database:

```sql
\c myapp
```

### 3. Create Schema:

```sql
\i schema.sql
```

## Database Schema

The `users` table is designed with the following constraints:

- `id`: Auto-increment Primary Key(`SERIAL`)
- `email`: Unique and Required (`UNIQUE`,`NOT NULL`)
- `name`: Required field
- `created_at`: Automatic timestamping

## Operations implemented

### 1. Create (Insert)

```sql
INSERT INTO users (name, email)
('Rahul Kesharwani', 'rahul@email.com')
RETURNING *;
```

### 2. Read (Select)

```sql
SELECT * FROM users;
SELECT name FROM users WHERE id = 1;
```

### 3. Update

```sql
UPDATE users
SET name = 'New Name'
WHERE id = 1;
```

### 4. Delete

```sql
DELETE FROM users WHERE id = 1;
```
