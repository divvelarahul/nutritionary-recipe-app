import React, { useState } from 'react';
import { TrendingUp, Sparkles } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { RecipeCard, Recipe } from './RecipeCard';
import { RecipeDetailModal } from './RecipeDetailModal';
import { weightGainRecipes } from '../data/recipes';

interface WeightGainPageProps {
  onBack: () => void;
}

export function WeightGainPage({ onBack }: WeightGainPageProps) {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [weight, setWeight] = useState('');
  const [mealPlan, setMealPlan] = useState<string[] | null>(null);

  const generateMealPlan = () => {
    if (!weight) return;

    const weightNum = parseFloat(weight);
    const dailyCalories = Math.round(weightNum * 35); // Higher calorie target

    setMealPlan([
      `Breakfast: Protein Scrambled Eggs (385 cal) - High protein start`,
      `Mid-Morning Snack: Avocado Peanut Butter Smoothie (485 cal) - Calorie-dense shake`,
      `Lunch: Chicken & Brown Rice Bowl (565 cal) - Complete meal with protein and carbs`,
      `Afternoon Snack: Trail mix with nuts and dried fruits (350 cal)`,
      `Dinner: Paneer Oat Paratha (420 cal) - Protein and complex carbs`,
      `Before Bed: Greek yogurt with granola (200 cal)`,
      `Total Daily Calories: ~2,405 cal (Target: ${dailyCalories} cal for healthy weight gain)`,
      `💡 Tip: Combine with strength training for muscle building!`
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-12 h-12 text-teal-600" />
            <h1 className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Protein-Rich Meals for Healthy Weight Gain
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nutritious, calorie-dense recipes to help you build muscle and gain weight healthily
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
            <Sparkles className="w-6 h-6 text-teal-600" />
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
              className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600"
            >
              Generate Plan
            </Button>
          </div>

          {mealPlan && (
            <div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6"
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
                    <span className="text-teal-600">•</span>
                    <span className="text-gray-700">{meal}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Recipe Cards */}
        <div>
          <h2 className="mb-8 text-center text-gray-800">Featured Weight Gain Recipes</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {weightGainRecipes.map((recipe, index) => (
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
          <h3 className="mb-6 text-gray-800">Weight Gain Tips</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-400 to-emerald-400 flex items-center justify-center">
                <span className="text-3xl">🍽️</span>
              </div>
              <h4 className="mb-2 text-gray-800">Eat More Often</h4>
              <p className="text-gray-600">5-6 meals throughout the day</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-400 to-emerald-400 flex items-center justify-center">
                <span className="text-3xl">💪</span>
              </div>
              <h4 className="mb-2 text-gray-800">Strength Training</h4>
              <p className="text-gray-600">Build muscle with resistance exercises</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-400 to-emerald-400 flex items-center justify-center">
                <span className="text-3xl">🥤</span>
              </div>
              <h4 className="mb-2 text-gray-800">Protein Shakes</h4>
              <p className="text-gray-600">Add smoothies between meals</p>
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
