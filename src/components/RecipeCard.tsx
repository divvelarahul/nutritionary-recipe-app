import React from 'react';
import { Clock, Flame } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface Recipe {
  id: string;
  name: string;
  image: string;
  cookingTime: string;
  calories: number;
  ingredients: string[];
  steps: string[];
  nutrition: {
    protein: string;
    carbs: string;
    fats: string;
  };
  healthBenefits: string[];
  category?: string;
}

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

export function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  return (
    <div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <Flame className="w-4 h-4 text-orange-500" />
          <span className="text-sm">{recipe.calories} cal</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="mb-2 text-gray-800">{recipe.name}</h3>
        
        <div className="flex items-center gap-4 text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{recipe.cookingTime}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-teal-50 text-teal-700 rounded-lg text-xs">
            {recipe.nutrition.protein} protein
          </span>
          <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs">
            {recipe.nutrition.carbs} carbs
          </span>
        </div>
      </div>
    </div>
  );
}
