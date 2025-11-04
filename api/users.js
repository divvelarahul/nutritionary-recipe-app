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
      const users = await db.collection('users').find({}).toArray();
      res.status(200).json(users);
    } else if (req.method === 'POST') {
      const { email, password, name, age, preferences } = req.body;
      const user = {
        email,
        password, // In production, hash with bcrypt
        name,
        age: age || null,
        preferences: preferences || [],
        createdAt: new Date(),
        lastLogin: new Date()
      };
      const result = await db.collection('users').insertOne(user);
      res.status(201).json({ id: result.insertedId, email, name });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}