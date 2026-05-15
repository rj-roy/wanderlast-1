require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(cors());
app.use(express.json());

const uri = process.env.DB_URI;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const run = async () => {
    try {
        await client.connect();
        const db = await client.db(process.env.DB_NAM);
        const desCollection = await db.collection(process.env.DB_COL);

        app.post('/destinations', async (req, res) => {
            const newDestination = req.body;
            const result = await desCollection.insertOne(newDestination);
            console.log(result, "user which are send");
            res.send(result);
        });

        app.get('/get-destinations', async (req, res)=>{
            const cursor = desCollection.find();
            const result = await cursor.toArray();
            console.log(result);
            res.send(result);
        });

    } finally {
        //
    }
};

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('server is running db connected')
})

app.listen(PORT, (req, res) => {
    console.log(`server is running on port ${PORT}`);
});