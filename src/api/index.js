import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();

require('dotenv').config();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/authenticationPassword', [urlencodedParser], (req, res) => {
  const { password } = req.body;

  if (password === process.env.CORRECT_PASSWORD) {
    res.send({ status: 'OK', auth: true });
  } else {
    res.send({ status: 'OK', auth: false });
  }

  res.end();
});

export default router;
