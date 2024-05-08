require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const port = 3500;
app.use(bodyParser.json());
const { connectDb, dbName } = require("./DbConn");
const { ObjectId } = require("mongodb");
connectDb();
app.get("/api/summerVegetable", (req, res) => {
  dbName
    .collection("Vegetable")
    .find({})
    .toArray()
    .then((data) => {
      if (data) res.send(data);
    })
    .catch((err) => console.log("err"));
});

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_URL);

// this will solve the bot query
app.post("/api/generate", async (req, res) => {
  try {
    const { query } = req.body;
    console.log;
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(query);
    const response = result.response;
    const text = response.text();
    res.send(text);
  } catch (error) {
    console.log(error);
    res.send("Internal server error");
  }
});

app.post("/api/search", async (req, res) => {
  try {
    const { itemSearch } = req.body;
    let dbCollection = await dbName.listCollections().toArray();
    let foundData = null; // Initialize foundData as null

    for (let i = 0; i < dbCollection.length; i++) {
      const val = dbCollection[i];
      const collection = dbName.collection(val.name);

      // Use await to wait for the findOne operation to complete
      const data = await collection.findOne({
        name: { $regex: new RegExp("^" + itemSearch, "i") },
      });

      if (data) {
        foundData = data;
        break; // Exit loop if data is found
      }
    }

    if (foundData) {
      console.log("Found data:", foundData);
      res.send(foundData); // Send found data as response
    } else {
      console.log("Data not found");
      res.send({status:false}); // Send response indicating data not found
    }
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("Internal server error"); // Send 500 status in case of error
  }
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
app.post("/api/query", (req, res) => {
  let queryRaised = req.body;
  const id = Math.floor(Math.random() * 100);
  queryRaised = { ...queryRaised, id };

  fs.readFile("query.json", "utf-8", (err, data) => {
    if (err) res.send({ status: false });
    data = JSON.parse(data);
    data.push(queryRaised);
    fs.writeFile("query.json", JSON.stringify(data), (err) => {
      if (err) res.send({ status: false });
      res.send({ status: true });
    });
  });
});

app.get("/api/vegetable/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  let o_id = new ObjectId(id);
  dbName
    .collection("Vegetable")
    .findOne({ _id: o_id })
    .then((val) => {
      console.log(id);
      if (val) res.send(val);
      else console.log("not found");
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/api/summerFruit", (req, res) => {
  dbName
    .collection("Fruits")
    .find({})
    .toArray()
    .then((data) => {
      if (data) res.send(data);
    })
    .catch((err) => console.log("err"));
});

app.get("/api/fruit/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  let o_id = new ObjectId(id);
  dbName
    .collection("Fruits")
    .findOne({ _id: o_id })
    .then((val) => {
      console.log(id);
      if (val) res.send(val);
      else console.log("not found");
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/api/flower", (req, res) => {
  dbName
    .collection("Flower")
    .find({})
    .toArray()
    .then((data) => {
      if (data) res.send(data);
    })
    .catch((err) => console.log("err"));
});

app.get("/api/flower/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  let o_id = new ObjectId(id);
  dbName
    .collection("Flower")
    .findOne({ _id: o_id })
    .then((val) => {
      console.log(id);
      if (val) res.send(val);
      else console.log("not found");
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
