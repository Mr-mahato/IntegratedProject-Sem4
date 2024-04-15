const express = require("express");
const app = express();
const fs = require('fs');
const port = 3500;

app.get("/api/intro", (req, res) => {
  res.send("Hello World");
});

app.get('/api/summerVegetable',(req,res)=>{
	fs.readFile('SummerVegetable.json','utf-8' , (err,data)=>{
        if(err) res.send('Internal server error');
        data = JSON.parse(data);
        res.send(data);
    })
})

app.get('/api/vegetable/:vegName',(req,res)=>{
	const {vegName}  = req.params;
	console.log(vegName);
  fs.readFile('SummerVegetable.json' , 'utf-8' , (err,data)=>{
    if(err) res.send('internal server error');
    data = JSON.parse(data);
    data = data.filter(val => val.name == vegName);
    res.send(data);
  })
})

app.get('/api/summerFruit',(req,res)=>{
	fs.readFile('SummerFruit.json','utf-8' , (err,data)=>{
        if(err) res.send('Internal server error');
        data = JSON.parse(data);
        res.send(data);
    })
})

app.get('/api/fruit/:fruitName',(req,res)=>{
	const {fruitName}  = req.params;
  fs.readFile('SummerFruit.json' , 'utf-8' , (err,data)=>{
    if(err) res.send('internal server error');
    data = JSON.parse(data);
    data = data.filter(val => val.name == fruitName);
    res.send(data);
  })
})

app.get('/api/flower',(req,res)=>{
  fs.readFile('SummerFlower.json','utf-8' , (err,data)=>{
        if(err) res.send('Internal server error');
        data = JSON.parse(data);
        res.send(data);
    })
})

app.get('/api/flower/:flowerName',(req,res)=>{
  const {flowerName}  = req.params;
  console.log(flowerName)
  fs.readFile('SummerFlower.json' , 'utf-8' , (err,data)=>{
    if(err) res.send('internal server error');
    data = JSON.parse(data);
    data = data.filter(val => val.name == flowerName);
    res.send(data);
  })
})



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
