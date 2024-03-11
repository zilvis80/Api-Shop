const express = require('express');
const app = express();

const productGetterRoutes = require('./routes/productGetterRoutes');
app.use('/product', productGetterRoutes);

app.post('/product', (req, res) => {
  res.send('shop backend works!');
});

app.patch('/product/:id', (req, res) => {
  res.send('shop backend works!');
});

app.listen(3000, () => {
  console.log('server started on http://localhost:3000');
});
