require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// ✅ FIX: consistent naming
const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("❌ MONGODB_URI is missing in environment variables");
  process.exit(1);
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let desCollection;

async function run() {
  try {
    await client.connect();

    const db = client.db(process.env.DB_NAME);
    desCollection = db.collection(process.env.DB_COLLECTION);

    console.log("✅ MongoDB connected");

  } catch (err) {
    console.error("❌ Mongo connection failed:", err);
    process.exit(1);
  }
}

run();

app.post("/destinations", async (req, res) => {
  const result = await desCollection.insertOne(req.body);
  res.send(result);
});

app.get("/get-destinations", async (req, res) => {
  const result = await desCollection.find().toArray();
  res.send(result);
});

app.get("/", (req, res) => {
  res.send("Server is running and DB connected");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});