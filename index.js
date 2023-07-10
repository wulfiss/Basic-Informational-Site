const http = require('http');

/* http
	.createServer((req, res) => {
		if (req.url === '/') {
			fs.readFile('./pages/index.html', (err, data) => {
				if (err) throw err;
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.write(data);
				res.end();
			});
		} else if (req.url === '/about') {
			fs.readFile('./pages/about.html', (err, data) => {
				if (err) throw err;
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.write(data);
				res.end();
			});
		} else if (req.url === '/contact-me') {
			fs.readFile('./pages/contact-me.html', (err, data) => {
				if (err) throw err;
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.write(data);
				res.end();
			});
		} else {
			fs.readFile('./pages/404.html', (err, data) => {
				if (err) throw err;
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.write(data);
				res.end();
			});
		}
	})
	.listen(8080, () => {
		console.log('Listen to port 8080 ....');
	}); */

// use an object to store the file paths
/* const routes = {
	'/': { filePath: './pages/index.html' },
	'/about': { filePath: './pages/about.html' },
	'/contact-me': { filePath: './pages/contact-me.html' }
};

//a helper function to read a file and send the responses
const sendResponse = (res, filePath, statusCode = 200) => {
	fs.readFile(filePath, (err, data) => {
		if (err) throw err;
		res.writeHead(statusCode, { 'Content-Type': 'text/html' });
		res.write(data);
		res.end();
	});
};

http
	.createServer((req, res) => {
		//check if the request url matches any of the routes
		if (routes[req.url]) {
			//use the object values to send response
			sendResponse(res, routes[req.url].filePath);
		} else {
			//send a 404 response for any other url
			sendResponse(res, './pages/404.html', 404);
		}
	})
	.listen(8080, () => {
		console.log('Listen to port 8080 .....');
	}); */

const express = require('express');
const e = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

/* app.get('/', async (req, res) => {
	res.send(await fsp.readFile('./pages/index.html', 'utf-8'));
});

app.get('/about', async (req, res) => {
	res.send(await fsp.readFile('./pages/about.html', 'utf-8'));
});

app.get('/contact', async (req, res) => {
	res.send(await fsp.readFile('./pages/contact-me.html', 'utf-8'));
});

app.use(async (req, res) => {
	res.status(404).send(await fsp.readFile('./pages/404.html', 'utf-8'));
}); */

const pages = {
	'/': './pages/index.html',
	'/about': './pages/about.html',
	'/contact-me': './pages/contact-me.html'
};

const notFoundPage = './pages/404.html';

app.get('*', (req, res) => {
	const pagePath = pages[req.path] || notFoundPage;
	fs.readFile(pagePath, 'utf-8', (err, data) => {
		if (err) {
			res.status(404).send('Page not found');
		} else {
			res.send(data);
		}
	});
});

app.listen(port, () => {
	console.log(`listening port ${port} or http://localhost:3000`);
});
