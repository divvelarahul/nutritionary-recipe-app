const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
let db;
const connectDB = async () => {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    db = client.db('nutritionary_app');
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

// Routes
app.get('/api/recipes', async (req, res) => {
  try {
    const recipes = await db.collection('recipes').find({}).toArray();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/recipes/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const recipes = await db.collection('recipes').find({ category }).toArray();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/recipes', async (req, res) => {
  try {
    const recipe = { ...req.body, createdAt: new Date() };
    const result = await db.collection('recipes').insertOne(recipe);
    res.status(201).json({ id: result.insertedId, ...recipe });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/users/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const user = {
      email,
      password, // In production, hash this with bcrypt
      name,
      createdAt: new Date(),
      favorites: []
    };
    const result = await db.collection('users').insertOne(user);
    res.status(201).json({ id: result.insertedId, email, name });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/favorites', async (req, res) => {
  try {
    const { userId, recipeId } = req.body;
    const favorite = { userId, recipeId, createdAt: new Date() };
    const result = await db.collection('favorites').insertOne(favorite);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/favorites/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const favorites = await db.collection('favorites').find({ userId }).toArray();
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});