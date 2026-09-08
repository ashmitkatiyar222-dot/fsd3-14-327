import http from "http";

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end("<h2 style='color:black; text-align:center;'>SIH Internal</h2>")
});

const port = 5000;
server.listen(port, () => {
    console.log(`server running on  http://localhost:${port}`);
});