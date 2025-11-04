import { MongoClient } from 'mongodb';

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('nutritionary_app');

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase();
    
    if (req.method === 'GET') {
      const { category } = req.query;
      
      let recipes;
      if (category) {
        recipes = await db.collection('recipes').find({ category }).toArray();
      } else {
        recipes = await db.collection('recipes').find({}).toArray();
      }
      
      res.status(200).json(recipes);
    } else if (req.method === 'POST') {
      const recipe = { ...req.body, createdAt: new Date() };
      const result = await db.collection('recipes').insertOne(recipe);
      res.status(201).json({ id: result.insertedId, ...recipe });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}