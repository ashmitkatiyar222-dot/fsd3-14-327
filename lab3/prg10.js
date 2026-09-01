import http from 'http';
import { createReadStream } from 'fs';

const server=http.createServer((req,res)=>{

    if(req.url==='/'&& req.method==='GET'){
        res.end("Welcome to the Home Page");
    }
    else if(req.url==='/mobile'&&req.method==='GET'){
        res.writeHead(200,{'Content-Type':'text/html'});
                const mobile = createReadStream("./data/products.JSON", {
                    encoding: "utf-8"

                });

                mobile.pipe(res);


    }
    else{
        res.statusCode=404;
        res.end("Page Not Found");
    }

});

const PORT=4000;
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})