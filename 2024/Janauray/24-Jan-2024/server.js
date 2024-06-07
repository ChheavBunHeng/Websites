const { log } = require("console");
const express = require("express");
const path = require("path");
const app = express();
const path = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});
app.listen(port,()=>{
    log("server is running");
})