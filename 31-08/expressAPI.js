const express = require('express');
const app = express();
const port = 3001;

const users = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', express.json(), (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});


