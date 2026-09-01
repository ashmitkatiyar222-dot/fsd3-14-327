import http from "http";
import { createReadStream } from "fs";
import { readFile } from "fs/promises";

const server = http.createServer(async (req, res) => {

    if (req.url === "/stream") {
        const stream = createReadStream("big.txt", {
            encoding: "utf-8"
        });

        stream.pipe(res);
    }

    else if (req.url === "/normal") {
        const text = await readFile("big.txt");
        res.end(text);
    }

    else if (req.url === "/product") {
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 200;

        const data = createReadStream("product.html");
        data.pipe(res);
    }else{

       fs.writeFile("home.html", "<h1>Home Page</h1>");
    }
    }

);
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});