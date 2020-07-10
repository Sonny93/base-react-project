const express = require('express');
const app = express();

app.use('/dist', express.static(`${__dirname}/dist`));
app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

const port = process.env.PORT || 3000;
app.listen(port, process.env.IP || '0.0.0.0', () => console.log('Server started as :', port));