const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const port = 3000;
app.use(bodyParser.json());

app.get("/api/summerVegetable", (req, res) => {
  fs.readFile("SummerVegetable.json", "utf-8", (err, data) => {
    if (err) res.send("Internal server error");
    data = JSON.parse(data);
    res.send(data);
  });
});

app.post("/api/signup", (req, res) => {
  const userData = req.body;
  userData.role ? 2 : (userData.role = 0);
  fs.readFile("user.json", "utf-8", (err, data) => {
    if (err) res.send({ status: false });
    data = JSON.parse(data);
    data.push(userData);
    fs.writeFile("user.json", JSON.stringify(data), (err) => {
      if (err) res.send({ status: false });
      res.send({ status: true });
    });
  });
});

app.get("/api/moderator", (req, res) => {
  fs.readFile("user.json", "utf-8", (err, data) => {
    if (err) res.send({ status: false });
    data = JSON.parse(data);
    data = data.filter((val) => val.role == 2);
    res.send(data);
  });
});
app.delete("/api/deleteMod/:email", (req, res) => {
  const { email } = req.params;
  fs.readFile("user.json", "utf-8", (err, data) => {
    if (err) res.send({ status: false });
    data = JSON.parse(data);
    data = data.filter((val) => val.email != email);
    fs.writeFile("user.json", JSON.stringify(data), (err) => {
      if (err) res.send({ status: false });
      res.send({ status: true });
    });
  });
});

app.post("/api/login", (req, res) => {
  const userData = req.body;
  fs.readFile("user.json", "utf-8", (err, data) => {
    if (err) res.send({ status: false });
    data = JSON.parse(data);
    const user = data.find((val) => val.email == userData.email);
    if (user) {
      res.send({ status: true, username: user.username, role: user.role });
    } else {
      res.send({ status: false });
    }
  });
});

// here i am sending the query data to the Admin and the moderator to client
app.get("/api/query", (req, res) => {
  fs.readFile("query.json", "utf-8", (err, data) => {
    if (err) res.send("Internal server error");
    data = JSON.parse(data);
    res.send(data);
  });
});

// here i am getting the query that are being resolved by the moderator / ADMIN
app.post("/api/query/:id", (req, res) => {
  const { id } = req.params;
  const queryAns = req.body;
  console.log(queryAns);
  fs.readFile("query.json", "utf-8", (err, data) => {
    if (err) res.send("Internal server error");
    data = JSON.parse(data);
    const ind = data.findIndex((val) => val.id == id);
    data[ind] = queryAns;
    fs.writeFile("query.json", JSON.stringify(data), (err) => {
      if (err) res.send("Internal server error");
      res.send({ status: true });
    });
  });
});

// lets write a endpoin which will have the query being asked by normal user 
app.post('/api/query', (req, res) => {  
  let queryRaised = req.body;
  const id = Math.floor(Math.random()*100);
  queryRaised = {...queryRaised , id}

  fs.readFile('query.json', 'utf-8', (err, data) => {
    if(err) res.send({status:false});
    data = JSON.parse(data);
    data.push(queryRaised);
    fs.writeFile('query.json', JSON.stringify(data), (err) => {
      if(err) res.send({status:false});
      res.send({status:true});
    })
  })
})

app.get("/api/vegetable/:vegName", (req, res) => {
  const { vegName } = req.params;
  fs.readFile("SummerVegetable.json", "utf-8", (err, data) => {
    if (err) res.send("internal server error");
    data = JSON.parse(data);
    data = data.filter((val) => val.name == vegName);
    res.send(data);
  });
});

app.get("/api/summerFruit", (req, res) => {
  fs.readFile("SummerFruit.json", "utf-8", (err, data) => {
    if (err) res.send("Internal server error");
    data = JSON.parse(data);
    res.send(data);
  });
});

app.get("/api/fruit/:fruitName", (req, res) => {
  const { fruitName } = req.params;
  fs.readFile("SummerFruit.json", "utf-8", (err, data) => {
    if (err) res.send("internal server error");
    data = JSON.parse(data);
    data = data.filter((val) => val.name == fruitName);
    res.send(data);
  });
});

app.get("/api/flower", (req, res) => {
  fs.readFile("SummerFlower.json", "utf-8", (err, data) => {
    if (err) res.send("Internal server error");
    data = JSON.parse(data);
    res.send(data);
  });
});

app.get("/api/flower/:flowerName", (req, res) => {
  const { flowerName } = req.params;
  fs.readFile("SummerFlower.json", "utf-8", (err, data) => {
    if (err) res.send("internal server error");
    data = JSON.parse(data);
    data = data.filter((val) => val.name == flowerName);
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
