const express = require('express');
const app = express();
const port = 3000;

const productGetterRoutes = require('./routes/productGetterRoutes');
app.use('/product', productGetterRoutes);

const productSetterRoutes = require('./routes/productSetterRoutes');
app.use('/product', productSetterRoutes);

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
