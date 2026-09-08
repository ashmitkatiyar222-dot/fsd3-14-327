import http from "http";
import { getAllTeam,addteam } from "./teams.js";
import {parse as parseUrl} from "url";


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

const server = http.createServer(async(req, res) => {
    const {pathname,query}=parseUrl(req.url,true);
    const {method}=req;
    console.log('pathname',pathname);
    console.log('query',query);
    console.log('method',method);

    if(pathname==='/api/v1/teams'&&method==='GET'){

        
        sendJson(res,200,getAllTeam());
    }else if(pathname==='/api/v1/teams'&&method==='POST'){
        await parseJSONBody(req).then((teamData)=>{
            addteam(teamData);
            sendJson(res,201,{message:"Team added successfully"});
        }).catch((error)=>{
            sendJson(res,400,{error:"Invalid JSON data"});
        });
    }else{
        res.statusCode=404;
        res.end();
    }
});

const port = 5000;
server.listen(port, () => {
    console.log(`server running on  http://localhost:${port}`);
});