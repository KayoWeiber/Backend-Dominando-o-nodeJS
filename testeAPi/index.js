const express = require('express');
const app = express();
const PORT = 3000;

const users = [{id:1, name: 'John Doe'}, {id:2, name: 'Jane Doe'}];
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.get('/users', (req, res) => {
  res.json(users);
});
