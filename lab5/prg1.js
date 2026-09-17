import express from "express";
import path from "path"
import { fileURLToPath } from "url";
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(dirname, "public", "modi_birthday_wish.html"));
});

app.get('/mentions', (req, res) => {
    res.sendFile(path.join(dirname, "public", "modi_mentions.html"));
});


app.get('/timeline', (req, res) => {
    res.sendFile(path.join(dirname, "public", "modi_timeline.html"));
});









const port = 3003;
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`)
})