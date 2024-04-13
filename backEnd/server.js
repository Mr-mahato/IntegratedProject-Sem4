const express = require("express");
const app = express();
const fs = require('fs');
const port = 3500;

app.get("/api/intro", (req, res) => {
  res.send("Hello World");
});

app.get('/api/summerVegetable',(req,res)=>{
    fs.readFile('SummerPlants.json','utf-8' , (err,data)=>{
        if(err) res.send('Internal server error');
        data = JSON.parse(data);
        res.send(data);
    })
})

app.get('/',(req,res)=>{
  res.send('hello you did hit this endpoint');
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
