'use strict';

const express = require('express');
const app = express();
const favicon = require('serve-favicon');

const port = process.env.PORT || 1234;

app.use(favicon(`${__dirname}/public/favicon.ico`))
	.use('/assets', express.static(`${__dirname}/public`))
	.use('/', (req, res, next) => {
		next();
	})
	.get('/', (req, res) => {
		res.sendFile(`${__dirname}/public/index.html`);
	})
	.get('/:website', (req, res) => {
		res.sendFile(`${__dirname}/public/${req.params.website}/${req.params.website}.html`);
	})
	.listen(port, () => {
		console.log(`Server listening on port ${port}`);
	});
