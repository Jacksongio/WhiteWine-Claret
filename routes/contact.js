const router = require('express').Router();
const { sendMail } = require('../controllers/emailController');

router.post('/', async (req, res) => {
  try {
    await sendMail(req.body);
    res.status(200).send('OK');
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

module.exports = router;
