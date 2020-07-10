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
	.get('/Change_Background_Color', (req, res) => {
		res.sendFile(`${__dirname}/public/Change_Background_Color/Change_Background_Color.html`);
	})
	.get('/Paint_A_Canvas', (req, res) => {
		res.sendFile(`${__dirname}/public/Paint_A_Canvas/Paint_A_Canvas.html`);
	})
	.get('/Nice_Text', (req, res) => {
		res.sendFile(`${__dirname}/public/Nice_Text/Nice_Text.html`);
	})
	.get('/Ranking', (req, res) => {
		res.sendFile(`${__dirname}/public/Ranking/Ranking.html`);
	})
	.get('/FizzBuzz', (req, res) => {
		res.sendFile(`${__dirname}/public/FizzBuzz/FizzBuzz.html`);
	})
	.get('/Clock', (req, res) => {
		res.sendFile(`${__dirname}/public/Clock/Clock.html`);
	})
	.get('/FormValidator', (req, res) => {
		res.sendFile(`${__dirname}/public/FormValidator/FormValidator.html`);
	})
	.get('/Draw', (req, res) => {
		res.sendFile(`${__dirname}/public/Draw/Draw.html`);
	})
	/*   
	.get('/{{Title}}', (req, res) => {
    	res.sendFile(`${__dirname}/public/{{Title}}/{{Title}}.html`)
  	}) 
  	*/
	.listen(port, () => {
		console.log(`Server listening on port ${port}`);
	});
