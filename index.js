const http = require('http');
const fs = require('fs');

const pages = {
	'/': './pages/index.html'
};

http
	.createServer((req, res) => {
		const page = req.url;
		fs.readFile(pages[page], (err, data) => {
			if (err) {
				res.writeHead(404, { 'Content-Type': 'text/html' });
				return res.end('404 Not Found');
			}
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			return res.end();
		});
	})
	.listen(8080);
