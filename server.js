import http from 'http';

const server = http.createServer((request, response) => {
    console.log(`${request.method} ${request.url}`);

    const url = new URL(request.url, 'http://localhost:3000'); // Create a URL object to break down the request URL

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
        else if (request.url === '/about') {
    response.writeHead(200, { 'Content-Type': 'text/html' });

    response.write(`
        <html>
            <body>
                <h1>About</h1>
                <p>This course is about learning how to build server-side, database-driven websites using Node.js.</p>
                <p>In this lab, I am creating a web server and learning how to create dynamic web application, 
                so that for diferrent requests the client receives corresponding responces</p>
            </body>
        </html>
    `);

        response.end();
    }

    else if (request.url === '/time') {

        const currentTime = new Date().toLocaleString(); // Get the current date and time readable for humans
        
        response.writeHead(200, { 'Content-Type': 'text/html' });

        response.write(`
        <html>
            <body>
                <h1>Current Server Date and Time</h1>
                <p>${currentTime}</p>
            </body>
        </html>
    `);
        response.end();
    }
        

    else if (url.pathname === '/greet') {
        const name = url.searchParams.get('name') || 'stranger';
        
          response.writeHead(200, { 'Content-Type': 'text/html' });

        response.write(`
            <html>
                <body>
                    <h1>Hello, ${name}!</h1>
                </body>
            </html>
        `);

        response.end();
    }
   
    
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});