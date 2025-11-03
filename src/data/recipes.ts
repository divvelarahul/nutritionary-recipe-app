import { Recipe } from '../components/RecipeCard';

export const diseaseRecipes: Record<string, Recipe[]> = {
  fever: [
    {
      id: 'fever-1',
      name: 'Ginger Turmeric Tea',
      image: 'https://images.unsplash.com/photo-1613637028036-ca0b31a4ad12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHNtb290aGllJTIwZGV0b3h8ZW58MXx8fHwxNzYyMDQ2MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '10 mins',
      calories: 45,
      ingredients: ['Fresh ginger (2 inches)', 'Turmeric powder (1 tsp)', 'Honey (1 tbsp)', 'Lemon juice (1 tbsp)', 'Water (2 cups)'],
      steps: [
        'Boil water in a pot',
        'Add grated ginger and turmeric powder',
        'Let it simmer for 5 minutes',
        'Strain and add honey and lemon juice',
        'Serve warm'
      ],
      nutrition: { protein: '0.5g', carbs: '12g', fats: '0.2g' },
      healthBenefits: ['Reduces inflammation', 'Boosts immunity', 'Helps lower body temperature', 'Rich in antioxidants'],
      category: 'fever'
    },
    {
      id: 'fever-2',
      name: 'Chicken Bone Broth',
      image: 'https://images.unsplash.com/photo-1636401870585-a8852371e84a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwcmljZSUyMGJvd2x8ZW58MXx8fHwxNzYyMDU3ODA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '3 hours',
      calories: 120,
      ingredients: ['Chicken bones (500g)', 'Carrots (2)', 'Celery (2 stalks)', 'Onion (1)', 'Garlic (4 cloves)', 'Apple cider vinegar (2 tbsp)', 'Water (8 cups)'],
      steps: [
        'Place chicken bones in a large pot',
        'Add chopped vegetables and garlic',
        'Pour water and add vinegar',
        'Bring to boil, then reduce heat',
        'Simmer for 3 hours, skimming foam occasionally',
        'Strain and serve warm'
      ],
      nutrition: { protein: '10g', carbs: '5g', fats: '3g' },
      healthBenefits: ['Easy to digest', 'Hydrating', 'Rich in minerals', 'Supports immune system'],
      category: 'fever'
    },
    {
      id: 'fever-3',
      name: 'Coconut Water Rice Porridge',
      image: 'https://images.unsplash.com/photo-1690896306653-6857ac14df1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYXRtZWFsJTIwYnJlYWtmYXN0JTIwYm93bHxlbnwxfHx8fDE3NjIwNzQxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '20 mins',
      calories: 165,
      ingredients: ['White rice (1/2 cup)', 'Coconut water (3 cups)', 'Fresh ginger (1 inch)', 'Sea salt (pinch)', 'Fresh mint leaves'],
      steps: [
        'Rinse rice thoroughly',
        'Cook rice in coconut water with grated ginger',
        'Simmer until rice is soft and porridge-like',
        'Add a pinch of salt',
        'Garnish with fresh mint leaves',
        'Serve warm'
      ],
      nutrition: { protein: '3g', carbs: '35g', fats: '1g' },
      healthBenefits: ['Easy on stomach', 'Replenishes electrolytes', 'Cooling effect', 'Gentle on digestion'],
      category: 'fever'
    },
    {
      id: 'fever-4',
      name: 'Peppermint Herbal Tea',
      image: 'https://images.unsplash.com/photo-1613637028036-ca0b31a4ad12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHNtb290aGllJTIwZGV0b3h8ZW58MXx8fHwxNzYyMDQ2MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '7 mins',
      calories: 25,
      ingredients: ['Fresh peppermint leaves (1/4 cup)', 'Chamomile flowers (1 tbsp)', 'Honey (1 tsp)', 'Hot water (2 cups)', 'Lemon slice'],
      steps: [
        'Boil water and let cool slightly',
        'Add peppermint leaves and chamomile',
        'Steep for 5 minutes',
        'Strain into cup',
        'Add honey and lemon slice',
        'Sip slowly while warm'
      ],
      nutrition: { protein: '0g', carbs: '7g', fats: '0g' },
      healthBenefits: ['Reduces nausea', 'Relaxing', 'Soothes headaches', 'Helps sleep'],
      category: 'fever'
    }
  ],
  cold: [
    {
      id: 'cold-1',
      name: 'Citrus Immunity Smoothie',
      image: 'https://images.unsplash.com/photo-1613637028036-ca0b31a4ad12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHNtb290aGllJTIwZGV0b3h8ZW58MXx8fHwxNzYyMDQ2MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '5 mins',
      calories: 180,
      ingredients: ['Orange (2)', 'Lemon (1)', 'Ginger (1 inch)', 'Honey (1 tbsp)', 'Spinach (1 cup)', 'Water (1 cup)'],
      steps: [
        'Peel and segment oranges',
        'Add all ingredients to blender',
        'Blend until smooth',
        'Serve immediately'
      ],
      nutrition: { protein: '2g', carbs: '42g', fats: '0.5g' },
      healthBenefits: ['High in Vitamin C', 'Boosts immunity', 'Anti-inflammatory', 'Energizing'],
      category: 'cold'
    },
    {
      id: 'cold-2',
      name: 'Garlic Soup',
      image: 'https://images.unsplash.com/photo-1631021967261-c57ee4dfa9bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzYyMDcxMjk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '25 mins',
      calories: 150,
      ingredients: ['Garlic cloves (15)', 'Vegetable broth (4 cups)', 'Olive oil (2 tbsp)', 'Thyme (1 tsp)', 'Bay leaf (1)', 'Salt and pepper to taste'],
      steps: [
        'Heat olive oil in a pot',
        'Add whole garlic cloves and sauté until golden',
        'Add vegetable broth, thyme, and bay leaf',
        'Simmer for 20 minutes',
        'Remove bay leaf, blend until smooth',
        'Season with salt and pepper'
      ],
      nutrition: { protein: '4g', carbs: '18g', fats: '7g' },
      healthBenefits: ['Natural antibiotic', 'Clears congestion', 'Anti-viral properties', 'Warming'],
      category: 'cold'
    },
    {
      id: 'cold-3',
      name: 'Vitamin C Power Bowl',
      image: 'https://images.unsplash.com/photo-1620019989479-d52fcedd99fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3NjIwNjM4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '10 mins',
      calories: 145,
      ingredients: ['Kiwi (2)', 'Orange segments (1 cup)', 'Strawberries (1 cup)', 'Bell pepper (1/2)', 'Lime juice (1 tbsp)', 'Mint leaves'],
      steps: [
        'Peel and slice kiwi',
        'Dice bell pepper',
        'Combine all fruits in a bowl',
        'Drizzle with lime juice',
        'Garnish with fresh mint',
        'Serve chilled'
      ],
      nutrition: { protein: '2g', carbs: '34g', fats: '1g' },
      healthBenefits: ['Extremely high in Vitamin C', 'Boosts immune response', 'Anti-oxidant rich', 'Fights infection'],
      category: 'cold'
    },
    {
      id: 'cold-4',
      name: 'Spicy Tomato Soup',
      image: 'https://images.unsplash.com/photo-1631021967261-c57ee4dfa9bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzYyMDcxMjk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '30 mins',
      calories: 135,
      ingredients: ['Tomatoes (6)', 'Onion (1)', 'Garlic (5 cloves)', 'Cayenne pepper (1/4 tsp)', 'Vegetable broth (2 cups)', 'Basil leaves', 'Black pepper'],
      steps: [
        'Roast tomatoes until charred',
        'Sauté onion and garlic',
        'Blend tomatoes with onion and garlic',
        'Add to broth and simmer for 15 minutes',
        'Season with cayenne and black pepper',
        'Garnish with basil and serve hot'
      ],
      nutrition: { protein: '3g', carbs: '22g', fats: '4g' },
      healthBenefits: ['Clears sinuses', 'Anti-viral', 'Warming', 'Rich in lycopene'],
      category: 'cold'
    }
  ],
  cough: [
    {
      id: 'cough-1',
      name: 'Honey Lemon Ginger Drink',
      image: 'https://images.unsplash.com/photo-1613637028036-ca0b31a4ad12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHNtb290aGllJTIwZGV0b3h8ZW58MXx8fHwxNzYyMDQ2MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '8 mins',
      calories: 65,
      ingredients: ['Fresh ginger (2 inches)', 'Lemon (1)', 'Raw honey (2 tbsp)', 'Cinnamon (1/2 tsp)', 'Hot water (2 cups)'],
      steps: [
        'Grate fresh ginger',
        'Squeeze lemon juice',
        'Mix ginger, lemon juice, and cinnamon in hot water',
        'Let steep for 5 minutes',
        'Strain and add honey',
        'Drink warm'
      ],
      nutrition: { protein: '0.3g', carbs: '18g', fats: '0.1g' },
      healthBenefits: ['Soothes throat', 'Reduces cough', 'Anti-inflammatory', 'Natural expectorant'],
      category: 'cough'
    },
    {
      id: 'cough-2',
      name: 'Thyme & Honey Syrup',
      image: 'https://images.unsplash.com/photo-1613637028036-ca0b31a4ad12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHNtb290aGllJTIwZGV0b3h8ZW58MXx8fHwxNzYyMDQ2MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '15 mins',
      calories: 80,
      ingredients: ['Fresh thyme (4 sprigs)', 'Raw honey (1/4 cup)', 'Water (1 cup)', 'Lemon juice (2 tbsp)', 'Cloves (3)'],
      steps: [
        'Boil water with thyme and cloves',
        'Simmer for 10 minutes',
        'Strain and let cool slightly',
        'Mix in honey and lemon juice',
        'Take 1 tablespoon every few hours',
        'Store in refrigerator'
      ],
      nutrition: { protein: '0g', carbs: '22g', fats: '0g' },
      healthBenefits: ['Natural cough suppressant', 'Antibacterial', 'Soothes throat irritation', 'Loosens mucus'],
      category: 'cough'
    },
    {
      id: 'cough-3',
      name: 'Warm Turmeric Milk',
      image: 'https://images.unsplash.com/photo-1613637028036-ca0b31a4ad12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHNtb290aGllJTIwZGV0b3h8ZW58MXx8fHwxNzYyMDQ2MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '8 mins',
      calories: 155,
      ingredients: ['Whole milk (1 cup)', 'Turmeric powder (1 tsp)', 'Black pepper (pinch)', 'Honey (1 tbsp)', 'Cinnamon stick (1)'],
      steps: [
        'Heat milk in a saucepan',
        'Add turmeric, black pepper, and cinnamon stick',
        'Simmer for 5 minutes, stirring occasionally',
        'Remove from heat and strain',
        'Add honey and stir well',
        'Drink warm before bedtime'
      ],
      nutrition: { protein: '8g', carbs: '18g', fats: '8g' },
      healthBenefits: ['Reduces throat inflammation', 'Aids sleep', 'Anti-inflammatory', 'Boosts immunity'],
      category: 'cough'
    }
  ],
  diabetes: [
    {
      id: 'diabetes-1',
      name: 'Quinoa Veggie Bowl',
      image: 'https://images.unsplash.com/photo-1627483334615-0e070e552a7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWlub2ElMjBib3dsJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NjIwNjY4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '30 mins',
      calories: 320,
      ingredients: ['Quinoa (1 cup)', 'Broccoli (1 cup)', 'Bell peppers (1)', 'Chickpeas (1/2 cup)', 'Olive oil (1 tbsp)', 'Lemon juice (2 tbsp)', 'Spinach (2 cups)'],
      steps: [
        'Cook quinoa according to package instructions',
        'Steam broccoli for 5 minutes',
        'Sauté bell peppers and chickpeas in olive oil',
        'Mix quinoa with vegetables',
        'Add fresh spinach and lemon juice',
        'Toss and serve'
      ],
      nutrition: { protein: '14g', carbs: '48g', fats: '8g' },
      healthBenefits: ['Low glycemic index', 'High in fiber', 'Regulates blood sugar', 'Rich in protein'],
      category: 'diabetes'
    },
    {
      id: 'diabetes-2',
      name: 'Cinnamon Oatmeal Bowl',
      image: 'https://images.unsplash.com/photo-1690896306653-6857ac14df1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYXRtZWFsJTIwYnJlYWtmYXN0JTIwYm93bHxlbnwxfHx8fDE3NjIwNzQxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '15 mins',
      calories: 280,
      ingredients: ['Steel-cut oats (1/2 cup)', 'Cinnamon (1 tsp)', 'Walnuts (1/4 cup)', 'Chia seeds (1 tbsp)', 'Blueberries (1/2 cup)', 'Almond milk (1 cup)'],
      steps: [
        'Cook oats in almond milk',
        'Add cinnamon while cooking',
        'Top with walnuts, chia seeds, and blueberries',
        'Serve warm'
      ],
      nutrition: { protein: '11g', carbs: '42g', fats: '12g' },
      healthBenefits: ['Stabilizes blood sugar', 'High in fiber', 'Heart-healthy', 'Sustained energy'],
      category: 'diabetes'
    },
    {
      id: 'diabetes-3',
      name: 'Grilled Salmon with Asparagus',
      image: 'https://images.unsplash.com/photo-1631021967261-c57ee4dfa9bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzYyMDcxMjk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '20 mins',
      calories: 295,
      ingredients: ['Salmon fillet (150g)', 'Asparagus (200g)', 'Lemon (1)', 'Olive oil (1 tbsp)', 'Garlic (2 cloves)', 'Herbs (dill, parsley)'],
      steps: [
        'Season salmon with herbs and garlic',
        'Grill salmon for 4-5 minutes per side',
        'Trim asparagus and toss with olive oil',
        'Grill asparagus for 5 minutes',
        'Squeeze lemon over both',
        'Serve immediately'
      ],
      nutrition: { protein: '28g', carbs: '8g', fats: '18g' },
      healthBenefits: ['Low carb, high protein', 'Rich in Omega-3', 'Improves insulin sensitivity', 'Heart-healthy fats'],
      category: 'diabetes'
    },
    {
      id: 'diabetes-4',
      name: 'Cauliflower Rice Stir-Fry',
      image: 'https://images.unsplash.com/photo-1592578630143-fac65cda7a67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhbWVkJTIwdmVnZXRhYmxlcyUyMGhlYWx0aHl8ZW58MXx8fHwxNzYyMDk2MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '18 mins',
      calories: 175,
      ingredients: ['Cauliflower (1 head, riced)', 'Mixed vegetables (2 cups)', 'Eggs (2)', 'Soy sauce (1 tbsp)', 'Sesame oil (1 tsp)', 'Green onions', 'Ginger'],
      steps: [
        'Rice the cauliflower in food processor',
        'Scramble eggs and set aside',
        'Stir-fry vegetables with ginger',
        'Add cauliflower rice and cook for 5 minutes',
        'Mix in eggs and soy sauce',
        'Garnish with green onions'
      ],
      nutrition: { protein: '12g', carbs: '15g', fats: '8g' },
      healthBenefits: ['Very low glycemic load', 'Rice alternative', 'High in fiber', 'Low calorie'],
      category: 'diabetes'
    }
  ],
  highbp: [
    {
      id: 'highbp-1',
      name: 'Beet and Berry Salad',
      image: 'https://images.unsplash.com/photo-1620019989479-d52fcedd99fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3NjIwNjM4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '20 mins',
      calories: 185,
      ingredients: ['Roasted beets (2)', 'Mixed greens (3 cups)', 'Blueberries (1/2 cup)', 'Walnuts (1/4 cup)', 'Balsamic vinegar (2 tbsp)', 'Olive oil (1 tbsp)'],
      steps: [
        'Roast beets until tender, then dice',
        'Arrange mixed greens on a plate',
        'Top with beets, blueberries, and walnuts',
        'Drizzle with olive oil and balsamic vinegar',
        'Toss gently and serve'
      ],
      nutrition: { protein: '6g', carbs: '24g', fats: '11g' },
      healthBenefits: ['Lowers blood pressure', 'Rich in nitrates', 'Heart-healthy', 'Anti-inflammatory'],
      category: 'highbp'
    },
    {
      id: 'highbp-2',
      name: 'Banana Oat Smoothie',
      image: 'https://images.unsplash.com/photo-1613637028036-ca0b31a4ad12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHNtb290aGllJTIwZGV0b3h8ZW58MXx8fHwxNzYyMDQ2MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '5 mins',
      calories: 245,
      ingredients: ['Bananas (2)', 'Rolled oats (1/2 cup)', 'Low-fat milk (1 cup)', 'Flaxseeds (1 tbsp)', 'Cinnamon (1/2 tsp)', 'Ice cubes'],
      steps: [
        'Add all ingredients to blender',
        'Blend until smooth and creamy',
        'Pour into glass',
        'Sprinkle with extra cinnamon if desired',
        'Drink immediately'
      ],
      nutrition: { protein: '10g', carbs: '52g', fats: '4g' },
      healthBenefits: ['High in potassium', 'Reduces blood pressure', 'Heart-healthy', 'Low sodium'],
      category: 'highbp'
    },
    {
      id: 'highbp-3',
      name: 'Garlic Spinach with White Beans',
      image: 'https://images.unsplash.com/photo-1631021967261-c57ee4dfa9bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzYyMDcxMjk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '12 mins',
      calories: 195,
      ingredients: ['Fresh spinach (4 cups)', 'White beans (1 cup, cooked)', 'Garlic (4 cloves)', 'Olive oil (1 tbsp)', 'Lemon juice (2 tbsp)', 'Red pepper flakes'],
      steps: [
        'Sauté garlic in olive oil',
        'Add spinach and cook until wilted',
        'Stir in white beans',
        'Add lemon juice and red pepper flakes',
        'Cook for 2 more minutes',
        'Serve warm'
      ],
      nutrition: { protein: '12g', carbs: '28g', fats: '5g' },
      healthBenefits: ['Rich in magnesium', 'Lowers BP naturally', 'High in fiber', 'Heart-protective'],
      category: 'highbp'
    }
  ],
  digestive: [
    {
      id: 'digestive-1',
      name: 'Probiotic Yogurt Bowl',
      image: 'https://images.unsplash.com/photo-1729368628910-2d58db8657a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2d1cnQlMjBwYXJmYWl0JTIwYmVycmllc3xlbnwxfHx8fDE3NjIwOTI0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '5 mins',
      calories: 220,
      ingredients: ['Greek yogurt (1 cup)', 'Banana (1)', 'Flaxseeds (1 tbsp)', 'Honey (1 tsp)', 'Berries (1/2 cup)', 'Granola (2 tbsp)'],
      steps: [
        'Place yogurt in a bowl',
        'Slice banana and add to yogurt',
        'Top with berries, flaxseeds, and granola',
        'Drizzle with honey',
        'Serve immediately'
      ],
      nutrition: { protein: '18g', carbs: '32g', fats: '5g' },
      healthBenefits: ['Promotes gut health', 'Rich in probiotics', 'High in fiber', 'Aids digestion'],
      category: 'digestive'
    },
    {
      id: 'digestive-2',
      name: 'Ginger Papaya Smoothie',
      image: 'https://images.unsplash.com/photo-1675962292427-062dc596171e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9vdGhpZSUyMGJvd2wlMjBmcnVpdHxlbnwxfHx8fDE3NjIwODI3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '5 mins',
      calories: 155,
      ingredients: ['Papaya (1 cup)', 'Fresh ginger (1 inch)', 'Greek yogurt (1/2 cup)', 'Mint leaves (5)', 'Honey (1 tsp)', 'Coconut water (1/2 cup)'],
      steps: [
        'Peel and cube papaya',
        'Add all ingredients to blender',
        'Blend until smooth',
        'Pour into glass',
        'Garnish with mint leaf'
      ],
      nutrition: { protein: '8g', carbs: '28g', fats: '2g' },
      healthBenefits: ['Contains digestive enzymes', 'Eases bloating', 'Anti-inflammatory', 'Soothes stomach'],
      category: 'digestive'
    },
    {
      id: 'digestive-3',
      name: 'Fennel & Carrot Soup',
      image: 'https://images.unsplash.com/photo-1631021967261-c57ee4dfa9bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzYyMDcxMjk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '30 mins',
      calories: 125,
      ingredients: ['Fennel bulb (1)', 'Carrots (3)', 'Vegetable broth (4 cups)', 'Onion (1)', 'Olive oil (1 tbsp)', 'Cumin (1 tsp)'],
      steps: [
        'Chop fennel, carrots, and onion',
        'Sauté vegetables in olive oil',
        'Add broth and cumin',
        'Simmer for 25 minutes',
        'Blend until smooth',
        'Serve warm'
      ],
      nutrition: { protein: '3g', carbs: '20g', fats: '4g' },
      healthBenefits: ['Reduces gas and bloating', 'Easy to digest', 'Anti-spasmodic', 'Soothes IBS'],
      category: 'digestive'
    }
  ],
  arthritis: [
    {
      id: 'arthritis-1',
      name: 'Anti-Inflammatory Golden Milk',
      image: 'https://images.unsplash.com/photo-1613637028036-ca0b31a4ad12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHNtb290aGllJTIwZGV0b3h8ZW58MXx8fHwxNzYyMDQ2MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '10 mins',
      calories: 140,
      ingredients: ['Turmeric (1 tsp)', 'Ginger (1/2 tsp)', 'Black pepper (pinch)', 'Coconut milk (1 cup)', 'Cinnamon (1/2 tsp)', 'Honey (1 tbsp)'],
      steps: [
        'Heat coconut milk in a saucepan',
        'Add turmeric, ginger, black pepper, and cinnamon',
        'Simmer for 5 minutes',
        'Strain and add honey',
        'Serve warm'
      ],
      nutrition: { protein: '2g', carbs: '20g', fats: '8g' },
      healthBenefits: ['Reduces joint inflammation', 'Pain relief', 'Rich in curcumin', 'Antioxidant properties'],
      category: 'arthritis'
    },
    {
      id: 'arthritis-2',
      name: 'Omega-3 Salmon Bowl',
      image: 'https://images.unsplash.com/photo-1627483334615-0e070e552a7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWlub2ElMjBib3dsJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NjIwNjY4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '25 mins',
      calories: 385,
      ingredients: ['Salmon (150g)', 'Brown rice (1 cup)', 'Avocado (1/2)', 'Edamame (1/2 cup)', 'Seaweed', 'Sesame seeds', 'Ginger dressing'],
      steps: [
        'Cook brown rice',
        'Bake salmon at 375°F for 12 minutes',
        'Arrange rice in bowl',
        'Top with flaked salmon, avocado, and edamame',
        'Add seaweed and sesame seeds',
        'Drizzle with ginger dressing'
      ],
      nutrition: { protein: '30g', carbs: '42g', fats: '18g' },
      healthBenefits: ['High in Omega-3 fatty acids', 'Reduces inflammation', 'Joint health', 'Anti-inflammatory'],
      category: 'arthritis'
    },
    {
      id: 'arthritis-3',
      name: 'Cherry Almond Smoothie',
      image: 'https://images.unsplash.com/photo-1613637028036-ca0b31a4ad12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHNtb290aGllJTIwZGV0b3h8ZW58MXx8fHwxNzYyMDQ2MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '5 mins',
      calories: 215,
      ingredients: ['Tart cherries (1 cup)', 'Almond butter (2 tbsp)', 'Almond milk (1 cup)', 'Banana (1)', 'Vanilla extract (1/2 tsp)', 'Ice'],
      steps: [
        'Add all ingredients to blender',
        'Blend until smooth',
        'Pour into glass',
        'Serve immediately'
      ],
      nutrition: { protein: '8g', carbs: '38g', fats: '9g' },
      healthBenefits: ['Reduces arthritis pain', 'Anti-inflammatory cherries', 'Rich in antioxidants', 'Joint support'],
      category: 'arthritis'
    }
  ],
  anemia: [
    {
      id: 'anemia-1',
      name: 'Iron-Rich Spinach Smoothie',
      image: 'https://images.unsplash.com/photo-1613637028036-ca0b31a4ad12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHNtb290aGllJTIwZGV0b3h8ZW58MXx8fHwxNzYyMDQ2MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '5 mins',
      calories: 195,
      ingredients: ['Spinach (2 cups)', 'Banana (1)', 'Strawberries (1 cup)', 'Orange juice (1 cup)', 'Dates (2)', 'Chia seeds (1 tbsp)'],
      steps: [
        'Add all ingredients to blender',
        'Blend until smooth',
        'Pour into glass',
        'Serve immediately'
      ],
      nutrition: { protein: '5g', carbs: '44g', fats: '3g' },
      healthBenefits: ['High in iron', 'Rich in Vitamin C for absorption', 'Boosts hemoglobin', 'Energizing'],
      category: 'anemia'
    },
    {
      id: 'anemia-2',
      name: 'Lentil & Kale Soup',
      image: 'https://images.unsplash.com/photo-1631021967261-c57ee4dfa9bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzYyMDcxMjk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '35 mins',
      calories: 265,
      ingredients: ['Red lentils (1 cup)', 'Kale (2 cups)', 'Tomatoes (2)', 'Onion (1)', 'Garlic (3 cloves)', 'Vegetable broth (4 cups)', 'Lemon juice'],
      steps: [
        'Sauté onion and garlic',
        'Add lentils and broth',
        'Simmer for 20 minutes',
        'Add chopped tomatoes and kale',
        'Cook for 10 more minutes',
        'Add lemon juice before serving'
      ],
      nutrition: { protein: '18g', carbs: '42g', fats: '2g' },
      healthBenefits: ['Very high in iron', 'Vitamin C enhances absorption', 'Protein-rich', 'Boosts energy'],
      category: 'anemia'
    },
    {
      id: 'anemia-3',
      name: 'Beef & Beetroot Salad',
      image: 'https://images.unsplash.com/photo-1620019989479-d52fcedd99fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3NjIwNjM4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      cookingTime: '20 mins',
      calories: 325,
      ingredients: ['Lean beef (150g)', 'Roasted beets (2)', 'Arugula (3 cups)', 'Pumpkin seeds (2 tbsp)', 'Feta cheese (30g)', 'Balsamic glaze'],
      steps: [
        'Grill beef to desired doneness',
        'Slice beef thinly',
        'Arrange arugula on plate',
        'Top with beef slices and diced beets',
        'Sprinkle with pumpkin seeds and feta',
        'Drizzle with balsamic glaze'
      ],
      nutrition: { protein: '32g', carbs: '18g', fats: '16g' },
      healthBenefits: ['Excellent source of heme iron', 'Increases red blood cells', 'High protein', 'Energy boosting'],
      category: 'anemia'
    }
  ]
};

export const weightLossRecipes: Recipe[] = [
  {
    id: 'wl-1',
    name: 'Quinoa Veggie Bowl',
    image: 'https://images.unsplash.com/photo-1627483334615-0e070e552a7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWlub2ElMjBib3dsJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NjIwNjY4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    cookingTime: '25 mins',
    calories: 285,
    ingredients: ['Quinoa (1/2 cup)', 'Kale (2 cups)', 'Cherry tomatoes (1 cup)', 'Cucumber (1)', 'Avocado (1/4)', 'Lemon juice (2 tbsp)', 'Olive oil (1 tsp)'],
    steps: [
      'Cook quinoa and let cool',
      'Chop vegetables into bite-sized pieces',
      'Massage kale with lemon juice',
      'Mix all ingredients',
      'Drizzle with olive oil',
      'Serve fresh'
    ],
    nutrition: { protein: '10g', carbs: '38g', fats: '9g' },
    healthBenefits: ['High in fiber', 'Low calorie density', 'Keeps you full longer', 'Rich in nutrients'],
    category: 'weightloss'
  },
  {
    id: 'wl-2',
    name: 'Citrus Detox Smoothie',
    image: 'https://images.unsplash.com/photo-1613637028036-ca0b31a4ad12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHNtb290aGllJTIwZGV0b3h8ZW58MXx8fHwxNzYyMDQ2MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    cookingTime: '5 mins',
    calories: 165,
    ingredients: ['Grapefruit (1)', 'Orange (1)', 'Spinach (1 cup)', 'Ginger (1 inch)', 'Green tea (1/2 cup, cooled)', 'Ice cubes'],
    steps: [
      'Peel and segment citrus fruits',
      'Add all ingredients to blender',
      'Blend until smooth',
      'Serve immediately'
    ],
    nutrition: { protein: '3g', carbs: '38g', fats: '0.5g' },
    healthBenefits: ['Boosts metabolism', 'Fat burning', 'Detoxifying', 'Low in calories'],
    category: 'weightloss'
  },
  {
    id: 'wl-3',
    name: 'Steamed Veggie Plate',
    image: 'https://images.unsplash.com/photo-1592578630143-fac65cda7a67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhbWVkJTIwdmVnZXRhYmxlcyUyMGhlYWx0aHl8ZW58MXx8fHwxNzYyMDk2MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    cookingTime: '15 mins',
    calories: 125,
    ingredients: ['Broccoli (1 cup)', 'Carrots (1 cup)', 'Green beans (1 cup)', 'Cauliflower (1 cup)', 'Lemon (1)', 'Herbs (fresh)', 'Sea salt (pinch)'],
    steps: [
      'Cut vegetables into uniform pieces',
      'Steam for 10-12 minutes until tender',
      'Arrange on a plate',
      'Squeeze lemon juice over vegetables',
      'Season with herbs and salt',
      'Serve warm'
    ],
    nutrition: { protein: '6g', carbs: '24g', fats: '1g' },
    healthBenefits: ['Very low in calories', 'High in fiber', 'Nutrient-dense', 'Filling and satisfying'],
    category: 'weightloss'
  },
  {
    id: 'wl-4',
    name: 'Yogurt Parfait',
    image: 'https://images.unsplash.com/photo-1729368628910-2d58db8657a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2d1cnQlMjBwYXJmYWl0JTIwYmVycmllc3xlbnwxfHx8fDE3NjIwOTI0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    cookingTime: '5 mins',
    calories: 195,
    ingredients: ['Low-fat Greek yogurt (1 cup)', 'Mixed berries (1 cup)', 'Chia seeds (1 tbsp)', 'Almonds (6, sliced)', 'Cinnamon (pinch)'],
    steps: [
      'Layer yogurt in a glass',
      'Add berries',
      'Sprinkle chia seeds',
      'Top with almonds and cinnamon',
      'Serve immediately'
    ],
    nutrition: { protein: '20g', carbs: '26g', fats: '5g' },
    healthBenefits: ['High in protein', 'Low in sugar', 'Probiotics for gut health', 'Satisfying'],
    category: 'weightloss'
  }
];

export const weightGainRecipes: Recipe[] = [
  {
    id: 'wg-1',
    name: 'Chicken & Brown Rice Bowl',
    image: 'https://images.unsplash.com/photo-1636401870585-a8852371e84a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwcmljZSUyMGJvd2x8ZW58MXx8fHwxNzYyMDU3ODA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    cookingTime: '35 mins',
    calories: 565,
    ingredients: ['Chicken breast (200g)', 'Brown rice (1 cup)', 'Sweet potato (1)', 'Broccoli (1 cup)', 'Olive oil (2 tbsp)', 'Garlic (3 cloves)', 'Soy sauce (1 tbsp)'],
    steps: [
      'Cook brown rice according to package',
      'Roast sweet potato cubes at 400°F for 25 mins',
      'Season and grill chicken breast',
      'Steam broccoli for 5 minutes',
      'Sauté garlic in olive oil',
      'Combine all ingredients and drizzle with soy sauce'
    ],
    nutrition: { protein: '42g', carbs: '68g', fats: '16g' },
    healthBenefits: ['High in protein', 'Complex carbs for energy', 'Muscle building', 'Nutrient-dense'],
    category: 'weightgain'
  },
  {
    id: 'wg-2',
    name: 'Avocado Peanut Butter Smoothie',
    image: 'https://images.unsplash.com/photo-1586601399668-cd0c1484cd44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwc21vb3RoaWUlMjBwcm90ZWlufGVufDF8fHx8MTc2MjA5NjE4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    cookingTime: '5 mins',
    calories: 485,
    ingredients: ['Avocado (1)', 'Peanut butter (3 tbsp)', 'Banana (2)', 'Whole milk (1.5 cups)', 'Honey (2 tbsp)', 'Protein powder (1 scoop)', 'Ice cubes'],
    steps: [
      'Add all ingredients to blender',
      'Blend until creamy and smooth',
      'Pour into a large glass',
      'Serve immediately'
    ],
    nutrition: { protein: '28g', carbs: '62g', fats: '24g' },
    healthBenefits: ['High in healthy fats', 'Calorie-dense', 'Muscle recovery', 'Sustained energy'],
    category: 'weightgain'
  },
  {
    id: 'wg-3',
    name: 'Paneer Oat Paratha',
    image: 'https://images.unsplash.com/photo-1690896306653-6857ac14df1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYXRtZWFsJTIwYnJlYWtmYXN0JTIwYm93bHxlbnwxfHx8fDE3NjIwNzQxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    cookingTime: '25 mins',
    calories: 420,
    ingredients: ['Whole wheat flour (1 cup)', 'Oats (1/2 cup)', 'Crumbled paneer (1/2 cup)', 'Onion (1)', 'Coriander (2 tbsp)', 'Ghee (2 tbsp)', 'Spices (to taste)'],
    steps: [
      'Mix flour and oats with water to make dough',
      'Mix paneer with chopped onions, coriander, and spices',
      'Roll out dough and stuff with paneer mixture',
      'Cook on a pan with ghee until golden brown on both sides',
      'Serve hot with yogurt'
    ],
    nutrition: { protein: '18g', carbs: '52g', fats: '16g' },
    healthBenefits: ['High in protein and fiber', 'Complex carbohydrates', 'Muscle building', 'Filling and nutritious'],
    category: 'weightgain'
  },
  {
    id: 'wg-4',
    name: 'Protein Scrambled Eggs',
    image: 'https://images.unsplash.com/photo-1589786741892-824d46e61d61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ2dzJTIwYnJlYWtmYXN0JTIwcHJvdGVpbnxlbnwxfHx8fDE3NjIwOTYxODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    cookingTime: '10 mins',
    calories: 385,
    ingredients: ['Eggs (4)', 'Cheese (1/2 cup)', 'Whole milk (1/4 cup)', 'Butter (2 tbsp)', 'Spinach (1 cup)', 'Tomatoes (1)', 'Salt and pepper'],
    steps: [
      'Whisk eggs with milk',
      'Melt butter in a pan',
      'Add eggs and scramble gently',
      'Add spinach, tomatoes, and cheese',
      'Cook until eggs are fluffy',
      'Season and serve with toast'
    ],
    nutrition: { protein: '32g', carbs: '6g', fats: '28g' },
    healthBenefits: ['Excellent protein source', 'Rich in vitamins', 'Muscle building', 'Energy-boosting'],
    category: 'weightgain'
  }
];
