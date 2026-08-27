import http from "http";

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "text/html");

    if (req.url == "/") {
        res.end("<h1>homepage</h1>");
    }

    else if (req.url == "/about") {
        res.end("<h2>about page</h2>")
    }

    else if (req.url == "/product") {
        res.end(`<h1>mobile phone</h1>
            <h2>price :25000 </h2>
            <p>discount :5%</p>
            <a href='#'>buy now</a>`);
    }

    else {
        res.statusCode = 404;
        res.end(`<h1>404- page notfound</h1>
         <p>page not found</p>
         <a href='/'>Home</a>`);
    }


});


server.listen(4004, () => {
    console.log("server running on http://localhost:4004");
})