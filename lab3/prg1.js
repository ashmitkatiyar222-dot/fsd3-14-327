import hhtp from "http";

const port = 4444;

const server = hhtp.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    console.log(req.url);
    console.log("request method");

    console.log(req.method);

    console.log("request headers");
    console.log(req.headers);
    res.end("hello")

});




server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});