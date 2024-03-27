const { Router } = require('express');
const router = Router();
const { registerUser } = require('../controllers');

//Get /user/

router.get('/', async (req, res) => {
  try {
    const data = await registerUser(req.body);

    res.json(data);
  } catch (error) {
    console.log(`Error:${error.message}`);
    res.status(400).json({ Error: error.message });
  }
});

module.exports = router;
