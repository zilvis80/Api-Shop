const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const productGetterRoutes = require('./routes/productGetterRoutes');
app.use('/product', productGetterRoutes);

const productSetterRoutes = require('./routes/productSetterRoutes');
app.use('/product', productSetterRoutes);

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://autodaliugausa:tYwYztux2gWB9Yl1@eshop.no8jkk2.mongodb.net/Eshop?retryWrites=true&w=majority&appName=Eshop'
    );
    console.log('Database Connected');
  } catch (err) {
    console.log('Error', err.message);
  }
};

connectDB();

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
