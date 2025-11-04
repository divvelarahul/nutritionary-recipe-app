const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:3001/api';

export interface Recipe {
  _id?: string;
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
  category: string;
  createdAt?: Date;
}

export interface User {
  _id?: string;
  email: string;
  name: string;
  favorites: string[];
}

// Recipe API calls
export const recipeAPI = {
  getAll: async (): Promise<Recipe[]> => {
    const response = await fetch(`${API_BASE_URL}/recipes`);
    return response.json();
  },

  getByCategory: async (category: string): Promise<Recipe[]> => {
    const response = await fetch(`${API_BASE_URL}/recipes/${category}`);
    return response.json();
  },

  create: async (recipe: Omit<Recipe, '_id' | 'createdAt'>): Promise<Recipe> => {
    const response = await fetch(`${API_BASE_URL}/recipes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recipe),
    });
    return response.json();
  },
};

// User API calls
export const userAPI = {
  register: async (userData: { email: string; password: string; name: string }) => {
    const response = await fetch(`${API_BASE_URL}/users/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return response.json();
  },
};

// Favorites API calls
export const favoritesAPI = {
  add: async (userId: string, recipeId: string) => {
    const response = await fetch(`${API_BASE_URL}/favorites`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, recipeId }),
    });
    return response.json();
  },

  getUserFavorites: async (userId: string) => {
    const response = await fetch(`${API_BASE_URL}/favorites/${userId}`);
    return response.json();
  },
};