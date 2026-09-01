import http from "http";
import { createReadStream } from "fs";

const server = http.createServer((req, res) => {
    // res.end("<h1>hello!</h1>");
    res.setHeader("Content-Type", "text/html");

    if (req.url === "/airtag") {
        // res.setHeader("Content-Type", "text/html");
        const data = createReadStream("airtag.html", {
            encoding: "utf-8",
        });
        data.pipe(res);
    }
    else if (req.url === "/mobile") {
        res.writeHead(200, { "Content-Type": "text/json" });
        const mobile = createReadStream("./data/products.JSON", {
            encoding: "utf-8",
        });
        mobile.pipe(res);
    }


    else if (req.url === "/manual") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        const manual = createReadStream("./data/chatgpt.txt");
        manual.pipe(res);
    }

    else {
        res.statusCode = 404;
        res.end("<h1>404 page not found</h1>");
    }
    // else{
    //     res.statusCode = 404;
    //     console.log("404 page not found");
    // }



});


const PORT = 4000;
server.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})