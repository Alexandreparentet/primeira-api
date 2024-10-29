// Importa o módulo HTTP
// const http = require('http');

import http from 'http';

const hostname = '127.0.0.1'; // 'localhost'
const porta = '3000';

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end("<h3>HELLO<h3/>"); 
});

server.listen(porta, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${porta}`);
});