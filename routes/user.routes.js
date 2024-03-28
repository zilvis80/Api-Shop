const { Router } = require('express');
const router = Router();
const { registerUser, loginUser } = require('../controllers');

//Get /user/

router.post('/', async (req, res) => {
  try {
    const data = await registerUser(req.body);

    res.json(data);
  } catch (error) {
    console.log(`Error:${error.message}`);
    res.status(400).json({ Error: error.message });
  }
});

//POST /user/login
router.post('/login', async (req, res) => {
  try {
    const data = await loginUser(req.body);

    res.json(data);
  } catch (error) {
    console.log(`Error:${error.message}`);
    res.status(400).json({ Error: error.message });
  }
});

module.exports = router;
