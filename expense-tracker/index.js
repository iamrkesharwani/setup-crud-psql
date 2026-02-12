import express from 'express';
import * as expense from './utils/helper.js';

const app = express();
app.use(express.json());

app.post('/create', async (req, res) => {
  try {
    const { title, amount, category } = req.body;
    const exp = await expense.createExpense(title, amount, category);
    res.status(201).json(exp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/', async (req, res) => {
  try {
    const expenses = await expense.selectAllExpenses();
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/expense/total', async (req, res) => {
  try {
    const total = await expense.getTotalAmount();
    res.status(200).json(total);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/expense/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const exp = await expense.filterExpenseCategory(category);
    if (!exp) res.status(404).json({ error: 'No expense in the category' });
    res.status(200).json(exp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/expense/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteExp = await expense.deleteExpense(id);
    if (!deleteExp) res.status(404).json({ error: 'No expense with this id' });
    res.status(204).json(deleteExp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
