const { Router } = require('express');
const router = Router();
//post /product
router.post('/', (req, res) => {
  res.send('create new product');
});
//patch /product/id
router.patch('/:id', (req, res) => {
  res.send('edit existing product');
});
module.exports = router;
