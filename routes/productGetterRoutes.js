const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.send('get all product!');
});

router.get('/:id', (req, res) => {
  res.send('get all product id!');
});
module.exports = router;
