import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const sampleUsers = [
  {
    email: 'john.doe@example.com',
    password: 'hashedPassword123', // In production, use bcrypt
    name: 'John Doe',
    age: 28,
    preferences: ['weightloss', 'diabetes'],
    createdAt: new Date('2024-01-15'),
    lastLogin: new Date('2024-11-01')
  },
  {
    email: 'sarah.smith@example.com',
    password: 'hashedPassword456',
    name: 'Sarah Smith',
    age: 34,
    preferences: ['fever', 'cold'],
    createdAt: new Date('2024-02-20'),
    lastLogin: new Date('2024-10-28')
  },
  {
    email: 'mike.johnson@example.com',
    password: 'hashedPassword789',
    name: 'Mike Johnson',
    age: 25,
    preferences: ['weightgain', 'highbp'],
    createdAt: new Date('2024-03-10'),
    lastLogin: new Date('2024-11-02')
  },
  {
    email: 'emma.wilson@example.com',
    password: 'hashedPasswordABC',
    name: 'Emma Wilson',
    age: 31,
    preferences: ['diabetes', 'weightloss'],
    createdAt: new Date('2024-04-05'),
    lastLogin: new Date('2024-10-30')
  }
];

async function seedUsersAndFavorites() {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db('nutritionary_app');
    
    // Clear existing users and favorites
    await db.collection('users').deleteMany({});
    await db.collection('favorites').deleteMany({});
    
    // Insert users
    const userResult = await db.collection('users').insertMany(sampleUsers);
    const userIds = Object.values(userResult.insertedIds);
    
    // Get recipe IDs from database
    const recipes = await db.collection('recipes').find({}).toArray();
    const recipeIds = recipes.map(r => r.id);
    
    // Create sample favorites
    const sampleFavorites = [
      // John's favorites (weightloss & diabetes recipes)
      { userId: userIds[0].toString(), recipeId: 'wl-1', createdAt: new Date('2024-01-16') },
      { userId: userIds[0].toString(), recipeId: 'wl-2', createdAt: new Date('2024-01-18') },
      { userId: userIds[0].toString(), recipeId: 'diabetes-1', createdAt: new Date('2024-01-20') },
      
      // Sarah's favorites (fever & cold recipes)
      { userId: userIds[1].toString(), recipeId: 'fever-1', createdAt: new Date('2024-02-21') },
      { userId: userIds[1].toString(), recipeId: 'fever-2', createdAt: new Date('2024-02-22') },
      { userId: userIds[1].toString(), recipeId: 'cold-1', createdAt: new Date('2024-02-25') },
      
      // Mike's favorites (weightgain & highbp recipes)
      { userId: userIds[2].toString(), recipeId: 'wg-1', createdAt: new Date('2024-03-11') },
      { userId: userIds[2].toString(), recipeId: 'wg-2', createdAt: new Date('2024-03-12') },
      { userId: userIds[2].toString(), recipeId: 'highbp-1', createdAt: new Date('2024-03-15') },
      
      // Emma's favorites (diabetes & weightloss recipes)
      { userId: userIds[3].toString(), recipeId: 'diabetes-1', createdAt: new Date('2024-04-06') },
      { userId: userIds[3].toString(), recipeId: 'wl-1', createdAt: new Date('2024-04-07') },
      { userId: userIds[3].toString(), recipeId: 'fever-1', createdAt: new Date('2024-04-10') }
    ];
    
    // Insert favorites
    await db.collection('favorites').insertMany(sampleFavorites);
    
    console.log(`✅ Database seeded successfully!`);
    console.log(`👥 Users created: ${sampleUsers.length}`);
    console.log(`❤️ Favorites created: ${sampleFavorites.length}`);
    console.log(`📊 Collections summary:`);
    
    const recipesCount = await db.collection('recipes').countDocuments();
    const usersCount = await db.collection('users').countDocuments();
    const favoritesCount = await db.collection('favorites').countDocuments();
    
    console.log(`   - recipes: ${recipesCount} documents`);
    console.log(`   - users: ${usersCount} documents`);
    console.log(`   - favorites: ${favoritesCount} documents`);
    
    await client.close();
  } catch (error) {
    console.error('Error seeding users and favorites:', error);
  }
}

seedUsersAndFavorites();