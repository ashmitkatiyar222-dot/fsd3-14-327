import http from 'http';

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.end('homepage');
    }
    else if (req.url === '/product' && req.method === 'GET') {
        const products = [
            {
                id: 1,
                name: "product1",
                price: 100,
            },
            {
                id: 2,
                name: "product2",
                price: 200,
            },
        ];
        res.end(JSON.stringify(products));
    }
    else if (req.url === '/product' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {  
            const product = JSON.parse(body);
            res.end(`add product ${product.name}`);
        });

        //add data to database
        res.writeHead(201,{
            'Content-Type': 'application/json'
        });
        //send back the status


        res.end(JSON.stringify({ message: 'Product added successfully' }));
    }
    else if (req.url === '/product' && req.method === 'PUT') {
        res.end('update product');
    }
    else if (req.url === '/product' && req.method === 'DELETE') {
        res.end('delete product');
    }

});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});