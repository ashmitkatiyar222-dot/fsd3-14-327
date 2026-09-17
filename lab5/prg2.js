import express from "express"
import path from 'path'
import {fileURLToPath} from "url"

const filename= fileURLToPath(import.meta.url);
const dirname= path.dirname(filename);

const app = express();

app.use(express.static(path.join(dirname,"frontend")));

app.use((req,res)=>{
    res.status(404).send("<h1>resource not found</h1>");
});



const port =3003;

app.listen(port,(req,res)=>{
    console.log(`server chal raha hai at http://localhost:${port}`)
})