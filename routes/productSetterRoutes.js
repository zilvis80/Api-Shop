const { Router } = require('express');
const { createProduct, updateProduct } = require('../controllers');

const router = Router();
//post /product
router.post('/', async (req, res) => {
  try {
    const data = await createProduct(req.body);

    res.json(data);
  } catch (error) {
    console.log(`Error:${error.message}`);
    res.status(400).json({ Error: error.message });
  }
});
//patch /product/id
router.patch('/:id', (req, res) => {
  const data = updateProduct();
  res.json(data);
});
module.exports = router;
