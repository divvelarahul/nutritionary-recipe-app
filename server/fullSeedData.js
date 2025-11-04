import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

// Sample recipes from different categories
const allRecipes = [
  // Fever recipes
  {
    id: 'fever-1',
    name: 'Ginger Turmeric Tea',
    image: 'https://images.unsplash.com/photo-1613637028036-ca0b31a4ad12',
    cookingTime: '10 mins',
    calories: 45,
    ingredients: ['Fresh ginger (2 inches)', 'Turmeric powder (1 tsp)', 'Honey (1 tbsp)', 'Lemon juice (1 tbsp)', 'Water (2 cups)'],
    steps: ['Boil water in a pot', 'Add grated ginger and turmeric powder', 'Let it simmer for 5 minutes', 'Strain and add honey and lemon juice', 'Serve warm'],
    nutrition: { protein: '0.5g', carbs: '12g', fats: '0.2g' },
    healthBenefits: ['Reduces inflammation', 'Boosts immunity', 'Helps lower body temperature', 'Rich in antioxidants'],
    category: 'fever'
  },
  {
    id: 'fever-2',
    name: 'Chicken Bone Broth',
    image: 'https://images.unsplash.com/photo-1636401870585-a8852371e84a',
    cookingTime: '3 hours',
    calories: 120,
    ingredients: ['Chicken bones (500g)', 'Carrots (2)', 'Celery (2 stalks)', 'Onion (1)', 'Garlic (4 cloves)', 'Apple cider vinegar (2 tbsp)', 'Water (8 cups)'],
    steps: ['Place chicken bones in a large pot', 'Add chopped vegetables and garlic', 'Pour water and add vinegar', 'Bring to boil, then reduce heat', 'Simmer for 3 hours, skimming foam occasionally', 'Strain and serve warm'],
    nutrition: { protein: '10g', carbs: '5g', fats: '3g' },
    healthBenefits: ['Easy to digest', 'Hydrating', 'Rich in minerals', 'Supports immune system'],
    category: 'fever'
  },
  // Cold recipes
  {
    id: 'cold-1',
    name: 'Citrus Immunity Smoothie',
    image: 'https://images.unsplash.com/photo-1613637028036-ca0b31a4ad12',
    cookingTime: '5 mins',
    calories: 180,
    ingredients: ['Orange (2)', 'Lemon (1)', 'Ginger (1 inch)', 'Honey (1 tbsp)', 'Spinach (1 cup)', 'Water (1 cup)'],
    steps: ['Peel and segment oranges', 'Add all ingredients to blender', 'Blend until smooth', 'Serve immediately'],
    nutrition: { protein: '2g', carbs: '42g', fats: '0.5g' },
    healthBenefits: ['High in Vitamin C', 'Boosts immunity', 'Anti-inflammatory', 'Energizing'],
    category: 'cold'
  },
  // Weight Loss recipes
  {
    id: 'wl-1',
    name: 'Quinoa Veggie Bowl',
    image: 'https://images.unsplash.com/photo-1627483334615-0e070e552a7c',
    cookingTime: '25 mins',
    calories: 285,
    ingredients: ['Quinoa (1/2 cup)', 'Kale (2 cups)', 'Cherry tomatoes (1 cup)', 'Cucumber (1)', 'Avocado (1/4)', 'Lemon juice (2 tbsp)', 'Olive oil (1 tsp)'],
    steps: ['Cook quinoa and let cool', 'Chop vegetables into bite-sized pieces', 'Massage kale with lemon juice', 'Mix all ingredients', 'Drizzle with olive oil', 'Serve fresh'],
    nutrition: { protein: '10g', carbs: '38g', fats: '9g' },
    healthBenefits: ['High in fiber', 'Low calorie density', 'Keeps you full longer', 'Rich in nutrients'],
    category: 'weightloss'
  },
  {
    id: 'wl-2',
    name: 'Citrus Detox Smoothie',
    image: 'https://images.unsplash.com/photo-1613637028036-ca0b31a4ad12',
    cookingTime: '5 mins',
    calories: 165,
    ingredients: ['Grapefruit (1)', 'Orange (1)', 'Spinach (1 cup)', 'Ginger (1 inch)', 'Green tea (1/2 cup, cooled)', 'Ice cubes'],
    steps: ['Peel and segment citrus fruits', 'Add all ingredients to blender', 'Blend until smooth', 'Serve immediately'],
    nutrition: { protein: '3g', carbs: '38g', fats: '0.5g' },
    healthBenefits: ['Boosts metabolism', 'Fat burning', 'Detoxifying', 'Low in calories'],
    category: 'weightloss'
  },
  // Weight Gain recipes
  {
    id: 'wg-1',
    name: 'Chicken & Brown Rice Bowl',
    image: 'https://images.unsplash.com/photo-1636401870585-a8852371e84a',
    cookingTime: '35 mins',
    calories: 565,
    ingredients: ['Chicken breast (200g)', 'Brown rice (1 cup)', 'Sweet potato (1)', 'Broccoli (1 cup)', 'Olive oil (2 tbsp)', 'Garlic (3 cloves)', 'Soy sauce (1 tbsp)'],
    steps: ['Cook brown rice according to package', 'Roast sweet potato cubes at 400°F for 25 mins', 'Season and grill chicken breast', 'Steam broccoli for 5 minutes', 'Sauté garlic in olive oil', 'Combine all ingredients and drizzle with soy sauce'],
    nutrition: { protein: '42g', carbs: '68g', fats: '16g' },
    healthBenefits: ['High in protein', 'Complex carbs for energy', 'Muscle building', 'Nutrient-dense'],
    category: 'weightgain'
  },
  {
    id: 'wg-2',
    name: 'Avocado Peanut Butter Smoothie',
    image: 'https://images.unsplash.com/photo-1586601399668-cd0c1484cd44',
    cookingTime: '5 mins',
    calories: 485,
    ingredients: ['Avocado (1)', 'Peanut butter (3 tbsp)', 'Banana (2)', 'Whole milk (1.5 cups)', 'Honey (2 tbsp)', 'Protein powder (1 scoop)', 'Ice cubes'],
    steps: ['Add all ingredients to blender', 'Blend until creamy and smooth', 'Pour into a large glass', 'Serve immediately'],
    nutrition: { protein: '28g', carbs: '62g', fats: '24g' },
    healthBenefits: ['High in healthy fats', 'Calorie-dense', 'Muscle recovery', 'Sustained energy'],
    category: 'weightgain'
  },
  // Diabetes recipes
  {
    id: 'diabetes-1',
    name: 'Quinoa Veggie Bowl',
    image: 'https://images.unsplash.com/photo-1627483334615-0e070e552a7c',
    cookingTime: '30 mins',
    calories: 320,
    ingredients: ['Quinoa (1 cup)', 'Broccoli (1 cup)', 'Bell peppers (1)', 'Chickpeas (1/2 cup)', 'Olive oil (1 tbsp)', 'Lemon juice (2 tbsp)', 'Spinach (2 cups)'],
    steps: ['Cook quinoa according to package instructions', 'Steam broccoli for 5 minutes', 'Sauté bell peppers and chickpeas in olive oil', 'Mix quinoa with vegetables', 'Add fresh spinach and lemon juice', 'Toss and serve'],
    nutrition: { protein: '14g', carbs: '48g', fats: '8g' },
    healthBenefits: ['Low glycemic index', 'High in fiber', 'Regulates blood sugar', 'Rich in protein'],
    category: 'diabetes'
  },
  // High BP recipes
  {
    id: 'highbp-1',
    name: 'Beet and Berry Salad',
    image: 'https://images.unsplash.com/photo-1620019989479-d52fcedd99fe',
    cookingTime: '20 mins',
    calories: 185,
    ingredients: ['Roasted beets (2)', 'Mixed greens (3 cups)', 'Blueberries (1/2 cup)', 'Walnuts (1/4 cup)', 'Balsamic vinegar (2 tbsp)', 'Olive oil (1 tbsp)'],
    steps: ['Roast beets until tender, then dice', 'Arrange mixed greens on a plate', 'Top with beets, blueberries, and walnuts', 'Drizzle with olive oil and balsamic vinegar', 'Toss gently and serve'],
    nutrition: { protein: '6g', carbs: '24g', fats: '11g' },
    healthBenefits: ['Lowers blood pressure', 'Rich in nitrates', 'Heart-healthy', 'Anti-inflammatory'],
    category: 'highbp'
  }
];

async function seedAllRecipes() {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db('nutritionary_app');
    
    // Clear existing data
    await db.collection('recipes').deleteMany({});
    
    // Insert all recipes
    await db.collection('recipes').insertMany(allRecipes);
    
    console.log(`Database seeded successfully with ${allRecipes.length} recipes`);
    console.log('Categories:', [...new Set(allRecipes.map(r => r.category))]);
    
    await client.close();
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedAllRecipes();