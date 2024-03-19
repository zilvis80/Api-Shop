const { Router } = require('express');
const { getAllProducts, getProductById } = require('../controllers');

const router = Router();
//get /product
router.get('/', async (req, res) => {
  try {
    const data = await getAllProducts(req.body);

    res.json(data);
  } catch (error) {
    console.log(`Error:${error.message}`);
    res.status(400).json({ Error: error.message });
  }
});
//get /product/id
router.get('/:id', async (req, res) => {
  const data = getProductById();
  try {
    const data = await getProductById(req.params.id);

    res.json(data);
  } catch (error) {
    console.log(`Error:${error.message}`);
    res.status(400).json({ Error: error.message });
  }
});
module.exports = router;
