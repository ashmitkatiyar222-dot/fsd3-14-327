import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>hello</h1>");
});


app.get('/about', (req, res) => {
    res.send("<h1>we are stupids</h1>");

});
app.post('/login',(req,res)=>{
    res.send({msg:'user login'})

});

app.put('/users/update/1',(req,res)=>{
res.send({msg:'user updated'});
});

app.delete('/users/1',(req,res)=>{
    res.send({msg:'remove user 1'})
})



app.use((req, res) => {
    res.status(404).send("<h1>404 Not Found</h1>");
    res.end();
});

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})