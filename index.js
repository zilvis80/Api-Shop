const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const productGetterRoutes = require('./routes/productGetter.routes');
app.use('/product', productGetterRoutes);

const productSetterRoutes = require('./routes/productSetter.routes');
app.use('/product', productSetterRoutes);
const userRoutes = require('./routes/user.routes');
app.use('/user', userRoutes);
app.get('/', (req, res) => res.send('Express on Vercel'));

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
