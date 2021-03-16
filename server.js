const express = require('express');
const app = express();

app.use((req, res, next) => {
	if (_.has(req.session, 'user') === false)
		req.session['user'] = { logged: false };
	next();
});

app.disable('x-powered-by');

app.use('/dist', express.static(`${__dirname}/dist`));
app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

const server = app.listen(3000, () => {
  const host = server.address().address, port = server.address().port;
	console.log(`[HTTP] Server listening on ${host}:${port}`);
});
