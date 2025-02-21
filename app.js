const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello All. I have made changes to the code'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
