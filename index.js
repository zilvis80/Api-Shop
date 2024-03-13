const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const app = express();
const port = 3000;

app.use(express.json());

const productGetterRoutes = require('./routes/productGetterRoutes');
app.use('/product', productGetterRoutes);

const productSetterRoutes = require('./routes/productSetterRoutes');
app.use('/product', productSetterRoutes);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log('Database Connected');
  } catch (err) {
    console.log('Error', err.message);
  }
};

connectDB();

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
