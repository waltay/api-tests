const express = require('express');
const app = express();

app.get("/", (req,res)=>{
    res.send("Welcome to my Walter's backend application");
});

app.get("/walter", (req,res)=>{
    res.send("Hello Walter!");
});

app.listen(3000, ()=>{
    console.log("Listening");
});