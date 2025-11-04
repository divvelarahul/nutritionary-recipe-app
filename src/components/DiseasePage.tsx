import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { RecipeCard, Recipe } from './RecipeCard';
import { RecipeDetailModal } from './RecipeDetailModal';
import { diseaseRecipes } from '../data/recipes';

interface DiseasePageProps {
  onBack: () => void;
}

export function DiseasePage({ onBack }: DiseasePageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDisease, setSelectedDisease] = useState<string | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const diseases = [
    { id: 'fever', name: 'Fever', emoji: '🤒', color: 'from-red-400 to-orange-400' },
    { id: 'cold', name: 'Cold & Flu', emoji: '🤧', color: 'from-blue-400 to-cyan-400' },
    { id: 'cough', name: 'Cough', emoji: '😷', color: 'from-teal-400 to-emerald-400' },
    { id: 'diabetes', name: 'Diabetes', emoji: '🩸', color: 'from-purple-400 to-pink-400' },
    { id: 'highbp', name: 'High BP', emoji: '💓', color: 'from-rose-400 to-red-400' },
    { id: 'digestive', name: 'Digestive Issues', emoji: '🍽️', color: 'from-amber-400 to-yellow-400' },
    { id: 'arthritis', name: 'Arthritis', emoji: '🦴', color: 'from-indigo-400 to-purple-400' },
    { id: 'anemia', name: 'Anemia', emoji: '💧', color: 'from-sky-400 to-blue-400' },
  ];

  const filteredDiseases = diseases.filter(disease =>
    disease.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get recipes from search query
  const getSearchedRecipes = (): Recipe[] => {
    if (!searchQuery) return [];
    
    const matchingDiseases = diseases.filter(disease =>
      disease.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    const allRecipes: Recipe[] = [];
    matchingDiseases.forEach(disease => {
      const recipes = diseaseRecipes[disease.id] || [];
      allRecipes.push(...recipes);
    });
    
    return allRecipes;
  };

  const searchedRecipes = getSearchedRecipes();
  const currentRecipes = selectedDisease ? diseaseRecipes[selectedDisease] || [] : [];
  const showSearchResults = searchQuery && !selectedDisease && searchedRecipes.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-purple-50 to-pink-50 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="mb-4">Find Healing Recipes for Common Health Conditions</h1>
          <p className="text-xl text-gray-600 mb-8">
            Natural, nutritious recipes to support your recovery and wellness
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search by disease name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {!selectedDisease ? (
          <>
            {/* Show search results if available */}
            {showSearchResults && (
              <div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
                  <h3 className="text-gray-800 mb-2">Search Results for "{searchQuery}"</h3>
                  <p className="text-gray-600">Found {searchedRecipes.length} recipes</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {searchedRecipes.map((recipe, index) => (
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
            )}

            {/* Disease Cards Grid */}
            {!showSearchResults && (
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {filteredDiseases.map((disease, index) => (
                  <div
                    key={disease.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedDisease(disease.id);
                      setSearchQuery('');
                    }}
                    className="cursor-pointer"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-center">
                      <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${disease.color} flex items-center justify-center shadow-lg`}>
                        <span className="text-4xl">{disease.emoji}</span>
                      </div>
                      <h3 className="text-gray-800">{disease.name}</h3>
                    </div>
                  </div>
                ))}
                
                {filteredDiseases.length === 0 && searchQuery && (
                  <div className="col-span-4 text-center py-12 text-gray-500">
                    No diseases found matching "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <>
            {/* Back Button */}
            <button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => {
                setSelectedDisease(null);
                setSearchQuery('');
              }}
              className="mb-8 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              ← Back to Conditions
            </button>

            {/* Disease Info */}
            <div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-6xl">
                    {diseases.find(d => d.id === selectedDisease)?.emoji}
                  </span>
                  <div>
                    <h2 className="text-gray-800">
                      {diseases.find(d => d.id === selectedDisease)?.name}
                    </h2>
                    <p className="text-gray-600">
                      Carefully curated recipes to help manage and alleviate symptoms
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recipe Cards */}
            <div>
              <h3 className="mb-6 text-gray-800">Recommended Recipes</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {currentRecipes.map((recipe, index) => (
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

              {currentRecipes.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  No recipes available for this condition yet.
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* Recipe Detail Modal */}
      <RecipeDetailModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />
    </div>
  );
}
