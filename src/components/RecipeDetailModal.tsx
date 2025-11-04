import React from 'react';
import { X, Clock, Flame, CheckCircle2 } from 'lucide-react';
import { Recipe } from './RecipeCard';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface RecipeDetailModalProps {
  recipe: Recipe | null;
  onClose: () => void;
}

export function RecipeDetailModal({ recipe, onClose }: RecipeDetailModalProps) {
  if (!recipe) return null;

  return (
    <AnimatePresence>
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Scrollable Content */}
          <div className="overflow-y-auto max-h-[90vh]">
            {/* Header Image */}
            <div className="relative h-80">
              <ImageWithFallback
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h2 className="mb-4">{recipe.name}</h2>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{recipe.cookingTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5" />
                    <span>{recipe.calories} calories</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Nutrition Info */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-teal-50 rounded-xl p-4 text-center">
                  <div className="text-teal-700">Protein</div>
                  <div className="text-teal-900">{recipe.nutrition.protein}</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 text-center">
                  <div className="text-purple-700">Carbs</div>
                  <div className="text-purple-900">{recipe.nutrition.carbs}</div>
                </div>
                <div className="bg-rose-50 rounded-xl p-4 text-center">
                  <div className="text-rose-700">Fats</div>
                  <div className="text-rose-900">{recipe.nutrition.fats}</div>
                </div>
              </div>

              {/* Ingredients */}
              <div className="mb-8">
                <h3 className="mb-4 text-gray-800">Ingredients</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-2 bg-gray-50 rounded-lg p-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                      <span className="text-gray-700">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preparation Steps */}
              <div className="mb-8">
                <h3 className="mb-4 text-gray-800">Preparation Steps</h3>
                <div className="space-y-4">
                  {recipe.steps.map((step, index) => (
                    <div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 text-white flex items-center justify-center">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Health Benefits */}
              <div className="mb-8">
                <h3 className="mb-4 text-gray-800">Health Benefits</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {recipe.healthBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-2 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg p-3"
                    >
                      <span className="text-lg">✨</span>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Start Cooking
                </button>
                <button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Add to Meal Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
