# MongoDB Atlas Setup Guide

## Step 1: Create MongoDB Atlas Account
1. Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. Sign up for free account
3. Create new project: "Nutritionary App"

## Step 2: Create Database Cluster
1. Click "Build a Database"
2. Choose **FREE** M0 cluster
3. Select cloud provider (AWS recommended)
4. Choose region closest to you
5. Name cluster: `nutritionary-cluster`

## Step 3: Configure Database Access
1. Go to **Database Access** tab
2. Click "Add New Database User"
3. Choose **Password** authentication
4. Username: `nutritionary_user`
5. Password: Generate secure password
6. Database User Privileges: **Read and write to any database**

## Step 4: Configure Network Access
1. Go to **Network Access** tab
2. Click "Add IP Address"
3. Choose **Allow Access from Anywhere** (0.0.0.0/0)
4. Or add your specific IP for security

## Step 5: Get Connection String
1. Go to **Database** tab
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy connection string
5. Replace `<password>` with your database user password

## Step 6: Update Environment Variables
Replace the connection string in `.env` file:
```
MONGODB_URI=mongodb+srv://nutritionary_user:YOUR_PASSWORD@nutritionary-cluster.xxxxx.mongodb.net/nutritionary_app?retryWrites=true&w=majority
```

## Step 7: Install Dependencies & Seed Database
```bash
npm install
npm run seed
npm run server
```

## Step 8: View Data in Atlas
1. Go to **Database** → **Browse Collections**
2. You'll see:
   - Database: `nutritionary_app`
   - Collections: `recipes`, `users`, `favorites`
3. Click collections to view stored data

## Collections Structure:

### recipes
```json
{
  "_id": "ObjectId",
  "id": "fever-1",
  "name": "Ginger Turmeric Tea",
  "category": "fever",
  "calories": 45,
  "ingredients": ["Fresh ginger", "Turmeric"],
  "nutrition": {"protein": "0.5g", "carbs": "12g"},
  "createdAt": "2024-11-03T..."
}
```

### users
```json
{
  "_id": "ObjectId",
  "email": "user@example.com",
  "name": "John Doe",
  "favorites": [],
  "createdAt": "2024-11-03T..."
}
```

### favorites
```json
{
  "_id": "ObjectId",
  "userId": "user_id",
  "recipeId": "recipe_id",
  "createdAt": "2024-11-03T..."
}
```

## API Endpoints Available:
- `GET /api/recipes` - Get all recipes
- `GET /api/recipes/:category` - Get recipes by category
- `POST /api/recipes` - Add new recipe
- `POST /api/users/register` - Register user
- `POST /api/favorites` - Add favorite
- `GET /api/favorites/:userId` - Get user favorites

Your app is now connected to MongoDB Atlas!