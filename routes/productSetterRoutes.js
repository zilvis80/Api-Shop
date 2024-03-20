const { Router } = require('express');
const { createProduct, updateProduct } = require('../controllers');

const router = Router();
//post /product
router.post('/', async (req, res) => {
  try {
    const data = await createProduct(req.body);

    res.status(201).json(data);
  } catch (error) {
    console.log(`Error:${error.message}`);
    res.status(400).json({ Error: error.message });
  }
});
//patch /product/id
router.patch('/:id', async (req, res) => {
  try {
    console.log(req);
    const data = await updateProduct(req.params.id, req.body);
    res.json(data);
  } catch (error) {
    console.log(`Error:${error.message}`);
    res.status(400).json({ Error: error.message });
  }
});
module.exports = router;
