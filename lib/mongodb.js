import { MongoClient } from "mongodb";
require("dotenv").config();

const URI = process.env.MONGO_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const client = new MongoClient(URI, options);
const clientPromise = client.connect();

export default clientPromise;
