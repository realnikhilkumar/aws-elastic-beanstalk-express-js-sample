const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is AWS CICD Tutorial. Putting a new release to review pipeline stages!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
