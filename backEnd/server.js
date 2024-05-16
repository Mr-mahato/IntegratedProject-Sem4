require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const port = 3500;
const path = require("path");
app.use(bodyParser.json());
const { connectDb, dbName } = require("./DbConn");
const { ObjectId } = require("mongodb");
connectDb();

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
      res.send({ status: false }); // Send response indicating data not found
    }
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("Internal server error"); // Send 500 status in case of error
  }
});

app.post("/api/signup", async (req, res) => {
  try {
    let { username, email, password, role } = req.body;
    role = role ? 2 : 0;
    // Input validation
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await dbName.collection("user").findOne({ email });

    // Check if user already exists
    if (existingUser) {
      return res.status(400).json({ status: false });
    }

    const user = await dbName
      .collection("user")
      .insertOne({ email, username, password, role });

    if (user) {
      res.send({ status: true });
    } else {
      res.send({ status: false });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
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

const file = path.join(__dirname, "/user.json");

app.post("/api/login", async(req, res) => {
  try {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await dbName.collection('user').findOne({ email });

    // Check if user exists
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    res.send({ status: true, username: user.username, role: user.role });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
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

//Vegetable Section
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
app.get("/api/winterVegetable", (req, res) => {
  dbName
    .collection("wintervegetable")
    .find({})
    .toArray()
    .then((data) => {
      if (data) res.send(data);
    })
    .catch((err) => console.log("err"));
});
app.get("/api/rainyVegetable", (req, res) => {
  dbName
    .collection("Rainyvegetable")
    .find({})
    .toArray()
    .then((data) => {
      if (data) res.send(data);
    })
    .catch((err) => console.log("err"));
});

//Finding the vegetable in the collection
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
    });
  dbName
    .collection("wintervegetable")
    .findOne({ _id: o_id })
    .then((val) => {
      console.log(id);
      if (val) res.send(val);
      else console.log("not found");
    });
  dbName
    .collection("Rainyvegetable")
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

//Fruit Section
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
app.get("/api/winterFruit", (req, res) => {
  dbName
    .collection("winterfruits")
    .find({})
    .toArray()
    .then((data) => {
      if (data) res.send(data);
    })
    .catch((err) => console.log("err"));
});
app.get("/api/rainyFruit", (req, res) => {
  dbName
    .collection("Rainyfruits")
    .find({})
    .toArray()
    .then((data) => {
      if (data) res.send(data);
    })
    .catch((err) => console.log("err"));
});

//Finding Fruit in the collection
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
    });
  dbName
    .collection("winterfruits")
    .findOne({ _id: o_id })
    .then((val) => {
      console.log(id);
      if (val) res.send(val);
      else console.log("not found");
    });
  dbName
    .collection("Rainyfruits")
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

//Flower Section
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
app.get("/api/winterFlower", (req, res) => {
  dbName
    .collection("winterflowers")
    .find({})
    .toArray()
    .then((data) => {
      if (data) res.send(data);
    })
    .catch((err) => console.log("err"));
});
app.get("/api/rainyFlower", (req, res) => {
  dbName
    .collection("Rainyflower")
    .find({})
    .toArray()
    .then((data) => {
      if (data) res.send(data);
    })
    .catch((err) => console.log("err"));
});

//Flower finding in the collection
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
    });
  dbName
    .collection("winterflowers")
    .findOne({ _id: o_id })
    .then((val) => {
      console.log(id);
      if (val) res.send(val);
      else console.log("not found");
    });
  dbName
    .collection("Rainyflower")
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
