// IMPORTED CORE MODULES
const fs = require('fs');
const http = require('http');
const url = require('url');

// IMPORTED OWN MODULES
const replacePlaceholdersFunc = require('./modules/replacePlaceholdersFunc');

// Syncronous code

// Loads the HTML templates
const overview = fs.readFileSync(`${__dirname}/overview.html`, 'utf-8');
const product = fs.readFileSync(`${__dirname}/product.html`, 'utf-8');
const card = fs.readFileSync(`${__dirname}/card.html`, 'utf-8');

// Loads the JSON data
const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

// Asyncronous code
const server = http.createServer((request, response) => {
    const {query, pathname} = url.parse(request.url, true);
    const path = request.url;
    
    // OVERVIEW
    if (path === '/' || path === '/overview') {
        response.writeHead(200, {
            'Content-type': 'text/html'
            })
        const cardHtmlArr = dataObj.map(element => replacePlaceholdersFunc(card, element)).join('');
        const html = overview.replace('{%PRODUCT_CARDS%}', cardHtmlArr);
        response.end(html);

    // PRODUCT
    } else if (pathname === '/product') {
        response.writeHead(200, {
            'Content-type': 'text/html'
            })
        const productToDisplay = dataObj[query.id];
        const replacedProduct = replacePlaceholdersFunc(product, productToDisplay);
        response.end(replacedProduct);

    // API
    } else if (path === '/api') {
        response.writeHead(200, {
        'Content-type': 'application/json'
        })
        response.end(data);
    } else {
        response.writeHead(404, {
            'Content-type': 'text/html'
        });
        response.end("<h1>404. Page could not be found</h1>");
    }
})

server.listen(8000, 'localhost', () => {
    console.log("Server is listening");
})