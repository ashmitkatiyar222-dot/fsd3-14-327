import http from "http";
import { getAllTeam } from "./teams.js";


const sendJson=(res,statusCode,data)=>{
    res.writeHead(statusCode, {"Content-Type": "application/json"});
    res.end(data==="undefined" ? "" : JSON.stringify(data));
}

const parseJSONBody = (req) => {
    return new Promise((resolve, reject) => {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
            try {
                const jsonData = JSON.parse(body);
                resolve(jsonData);
            } catch (error) {
                reject(error);
            }
        });

    });
};

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end("<h2 style='color:black;'>welcome to server side</h2>")
});

const port = 5000;
server.listen(port, () => {
    console.log(`server running on  http://localhost:${port}`);
});