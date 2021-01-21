import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import apiRouters from 'api';

require('dotenv').config();

const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://127.0.0.1:5500',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(apiRouters);

app.listen(port, () => {
  console.log(`Listen on port: ${port}`);
});

export default app;
