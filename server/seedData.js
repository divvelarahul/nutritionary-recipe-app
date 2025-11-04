const { MongoClient } = require('mongodb');
require('dotenv').config();

const seedRecipes = [
  {
    id: 'fever-1',
    name: 'Ginger Turmeric Tea',
    image: 'https://images.unsplash.com/photo-1613637028036-ca0b31a4ad12',
    cookingTime: '10 mins',
    calories: 45,
    ingredients: ['Fresh ginger (2 inches)', 'Turmeric powder (1 tsp)', 'Honey (1 tbsp)'],
    steps: ['Boil water in a pot', 'Add grated ginger and turmeric', 'Strain and add honey'],
    nutrition: { protein: '0.5g', carbs: '12g', fats: '0.2g' },
    healthBenefits: ['Reduces inflammation', 'Boosts immunity'],
    category: 'fever'
  },
  {
    id: 'wl-1',
    name: 'Quinoa Veggie Bowl',
    image: 'https://images.unsplash.com/photo-1627483334615-0e070e552a7c',
    cookingTime: '25 mins',
    calories: 285,
    ingredients: ['Quinoa (1/2 cup)', 'Kale (2 cups)', 'Cherry tomatoes (1 cup)'],
    steps: ['Cook quinoa and let cool', 'Chop vegetables', 'Mix all ingredients'],
    nutrition: { protein: '10g', carbs: '38g', fats: '9g' },
    healthBenefits: ['High in fiber', 'Low calorie density'],
    category: 'weightloss'
  }
];

async function seedDatabase() {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db('nutritionary_app');
    
    // Clear existing data
    await db.collection('recipes').deleteMany({});
    
    // Insert seed data
    await db.collection('recipes').insertMany(seedRecipes);
    
    console.log('Database seeded successfully');
    await client.close();
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedDatabase();