import express from 'express';
import bodyParser from 'body-parser';

import apiRouters from 'api';

require('dotenv').config();

const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(apiRouters);

app.listen(port, () => {
  console.log(`Listen on port: ${port}`);
});

export default app;
