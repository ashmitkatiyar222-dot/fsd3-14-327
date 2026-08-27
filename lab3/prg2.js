import http from "http";

const server = http.createServer((req, res) => {

    res.writeHead(404,{
        "content-type":"text/plain"
    });

    res.end("<h1>welcome to the server</h1>");
});

server.listen(4000,()=>{
    console.log("server running on http://localhost:4000");
})