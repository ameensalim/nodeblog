import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.get("/",(req,res) => {
    res.render("index.ejs");
});
app.get("/new",(req,res) => {
    res.render("newpost.ejs");
});
app.listen(port,() =>{
    console.log(`server on ${port}`);
});
