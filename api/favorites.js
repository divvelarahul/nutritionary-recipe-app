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
      const { userId } = req.query;
      
      if (userId) {
        // Get favorites for specific user with recipe details
        const favorites = await db.collection('favorites').find({ userId }).toArray();
        const recipeIds = favorites.map(f => f.recipeId);
        const recipes = await db.collection('recipes').find({ id: { $in: recipeIds } }).toArray();
        
        const favoritesWithRecipes = favorites.map(fav => ({
          ...fav,
          recipe: recipes.find(r => r.id === fav.recipeId)
        }));
        
        res.status(200).json(favoritesWithRecipes);
      } else {
        // Get all favorites
        const favorites = await db.collection('favorites').find({}).toArray();
        res.status(200).json(favorites);
      }
    } else if (req.method === 'POST') {
      const { userId, recipeId } = req.body;
      const favorite = { 
        userId, 
        recipeId, 
        createdAt: new Date() 
      };
      const result = await db.collection('favorites').insertOne(favorite);
      res.status(201).json({ id: result.insertedId, ...favorite });
    } else if (req.method === 'DELETE') {
      const { userId, recipeId } = req.body;
      const result = await db.collection('favorites').deleteOne({ userId, recipeId });
      res.status(200).json({ deleted: result.deletedCount });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}