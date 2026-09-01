const http =require('http');

  const server= http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    if(req.url==='/'){
        res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>coding</title></head>');
    res.write('<body><h1>homepage hai ji</h1></body>')
    res.write('</html>');
    res.end();
    }
    else if(req.url==='/products'){res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>coding</title></head>');
    res.write('<body><h1>products page hai ji</h1></body>')
    res.write('</html>');
    res.end();}
    else{res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>coding</title></head>');
    res.write('<body><h1>ji dsa bhi krna hai</h1></body>')
    res.write('</html>');
    res.end();

    }
    

   });
  

   server.listen(3000, () => {
    console.log(`Server running on address http://localhost:${3000}`);
});
 
   
