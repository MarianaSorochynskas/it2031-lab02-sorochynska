import http from 'http';

const server = http.createServer((request, response) => {
    console.log(`${request.method} ${request.url}`);

    if (request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' });

        response.write(`
            <html>
                <body>
                    <h1>My first Web Server</h1>
                    <p>Mariana Sorochynska</p>

                    <a href="/about">About</a><br>
                    <a href="/time">Time</a><br>
                    <a href="/greet">Greetings</a>
                </body>
            </html
        `);

        response.end();
    }
    response.end();
    
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});