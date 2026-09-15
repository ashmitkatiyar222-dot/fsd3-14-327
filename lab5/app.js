import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>hello</h1>");
});
app.use( (req,res)=>{
    res.status(404).send("<h1>404 Not Found</h1>");
    res.end();
});

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})