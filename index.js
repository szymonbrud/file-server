import express from 'express';
import bodyParser from 'body-parser';

require('dotenv').config();

const correctPassword = 'haslo';

const port = process.env.PORT;

const app = express();
app.use(bodyParser.json());

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/authenticationPassword', [urlencodedParser], (req, res) => {
  const { password } = req.body;

  if (password === correctPassword) {
    res.send({ status: 'OK', auth: true });
  } else {
    res.send({ status: 'OK', auth: false });
  }

  res.end();
});

app.listen(port, () => {
  console.log(`Listen on port: ${port}`);
});
