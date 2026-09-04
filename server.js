import http from 'http';

const server = http.createServer((request, response) => {
    console.log(`${request.method} ${request.url}`);
    response.write('Hello World');
    response.end();
    
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});