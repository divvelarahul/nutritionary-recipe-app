import React, { useState } from 'react';
import { TrendingDown, Sparkles } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { RecipeCard, Recipe } from './RecipeCard';
import { RecipeDetailModal } from './RecipeDetailModal';
import { weightLossRecipes } from '../data/recipes';

interface WeightLossPageProps {
  onBack: () => void;
}

export function WeightLossPage({ onBack }: WeightLossPageProps) {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [weight, setWeight] = useState('');
  const [mealPlan, setMealPlan] = useState<string[] | null>(null);

  const generateMealPlan = () => {
    if (!weight) return;

    const weightNum = parseFloat(weight);
    const dailyCalories = Math.round(weightNum * 24); // Rough BMR estimation

    setMealPlan([
      `Breakfast: Yogurt Parfait (195 cal) - Start your day with protein and probiotics`,
      `Mid-Morning Snack: Green apple with almond butter (150 cal)`,
      `Lunch: Quinoa Veggie Bowl (285 cal) - Filling and nutrient-dense`,
      `Afternoon Snack: Citrus Detox Smoothie (165 cal) - Metabolism booster`,
      `Dinner: Steamed Veggie Plate (125 cal) - Light and satisfying`,
      `Total Daily Calories: ~920 cal (Recommended: ${dailyCalories} cal for your weight)`,
      `💡 Tip: Combine with regular exercise for best results!`
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingDown className="w-12 h-12 text-purple-600" />
            <h1 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Light, Energy-Boosting, Nutrient-Rich Meals
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delicious, low-calorie recipes designed to help you achieve your weight loss goals naturally
          </p>
        </div>

        {/* Meal Plan Generator */}
        <div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-8 shadow-xl mb-12 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-purple-600" />
            <h3 className="text-gray-800">Personalized Meal Plan Generator</h3>
          </div>
          
          <div className="flex gap-4 mb-6">
            <Input
              type="number"
              placeholder="Enter your weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="flex-1"
            />
            <Button
              onClick={generateMealPlan}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              Generate Plan
            </Button>
          </div>

          {mealPlan && (
            <div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6"
            >
              <h4 className="mb-4 text-gray-800">Your Daily Meal Plan</h4>
              <div className="space-y-3">
                {mealPlan.map((meal, index) => (
                  <div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-purple-600">•</span>
                    <span className="text-gray-700">{meal}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Recipe Cards */}
        <div>
          <h2 className="mb-8 text-center text-gray-800">Featured Weight Loss Recipes</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {weightLossRecipes.map((recipe, index) => (
              <div
                key={recipe.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <RecipeCard
                  recipe={recipe}
                  onClick={() => setSelectedRecipe(recipe)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-white rounded-3xl p-8 shadow-lg"
        >
          <h3 className="mb-6 text-gray-800">Weight Loss Tips</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <span className="text-3xl">💧</span>
              </div>
              <h4 className="mb-2 text-gray-800">Stay Hydrated</h4>
              <p className="text-gray-600">Drink at least 8 glasses of water daily</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <span className="text-3xl">🏃</span>
              </div>
              <h4 className="mb-2 text-gray-800">Stay Active</h4>
              <p className="text-gray-600">30 minutes of exercise daily</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <span className="text-3xl">😴</span>
              </div>
              <h4 className="mb-2 text-gray-800">Get Rest</h4>
              <p className="text-gray-600">7-8 hours of quality sleep</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recipe Detail Modal */}
      <RecipeDetailModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />
    </div>
  );
}
