require("dotenv").config();
const {MongoClient} = require('mongodb');
const fs = require('fs');
const { connect } = require("http2");

const client = new MongoClient(process.env.Db_URL);


let dbName;
const connectDb = async()=>{
  try {
    await client.connect();
    console.log('connnected to db');

    dbName = client.db('Agroguide');
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  connectDb, 
  dbName : client.db('Agroguide')
}