const http = require('http');
const fs = require('fs');

http
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
	});

/* const pages = {
	'/': './pages/index.html',
	'/about': './pages/about.html',
	'/contact-me': './pages/contact-me.html',
	'/404': './pages/404.html'
};
 */
/* http
	.createServer((req, res) => {
		let page = req.url;
		fs.readFile(path.join(__dirname, pages[page]), (err, data) => {
			if (err) {
				res.writeHead(404, { 'Content-Type': 'text/html' });
				res.end('404 Not Found');
			} else {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.write(data);
				res.end();
			}
		});
	})
	.listen(8080);
 */
