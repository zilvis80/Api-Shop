const { Router } = require('express');
const { getAllProducts, getProductById } = require('../controllers');

const router = Router();
//get /product
router.get('/', (req, res) => {
  const data = getAllProducts();
  res.json(data);
});
//get /product/id
router.get('/:id', (req, res) => {
  const data = getProductById();
  res.json(data);
});
module.exports = router;
