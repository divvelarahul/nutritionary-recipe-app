import React from 'react';
import { motion } from 'motion/react';
import { Heart, TrendingDown, TrendingUp } from 'lucide-react';

interface DashboardProps {
  userName: string;
  onNavigate: (page: string) => void;
}

export function Dashboard({ userName, onNavigate }: DashboardProps) {
  const features = [
    {
      id: 'disease',
      title: 'Disease Management',
      description: 'Find healing recipes for common health conditions',
      icon: Heart,
      gradient: 'from-rose-400 to-pink-500',
      emoji: '❤️',
    },
    {
      id: 'weightloss',
      title: 'Weight Loss Recipes',
      description: 'Light, energy-boosting, nutrient-rich meals',
      icon: TrendingDown,
      gradient: 'from-purple-400 to-indigo-500',
      emoji: '🏃',
    },
    {
      id: 'weightgain',
      title: 'Weight Gain Recipes',
      description: 'Protein-rich meals for healthy weight gain',
      icon: TrendingUp,
      gradient: 'from-teal-400 to-emerald-500',
      emoji: '💪',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-purple-50 to-pink-50 pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4">
            Hello, {userName} <span className="inline-block animate-wave">👋</span>
          </h1>
          <p className="text-xl text-gray-600">
            What would you like to explore today?
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -12, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate(feature.id)}
              className="relative group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl opacity-80 group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative bg-white rounded-3xl p-8 shadow-xl group-hover:shadow-2xl transition-all h-full">
                <div className="flex flex-col items-center text-center h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <span className="text-4xl">{feature.emoji}</span>
                  </motion.div>

                  {/* Content */}
                  <h3 className="mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{feature.description}</p>

                  {/* Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 bg-gradient-to-r ${feature.gradient} text-white rounded-full shadow-md hover:shadow-lg transition-all`}
                  >
                    Explore Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <div className="text-3xl mb-2 bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">500+</div>
            <p className="text-gray-600">Recipes</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <div className="text-3xl mb-2 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">50+</div>
            <p className="text-gray-600">Conditions</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <div className="text-3xl mb-2 bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">10k+</div>
            <p className="text-gray-600">Happy Users</p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-15deg); }
        }
        .animate-wave {
          animation: wave 1s ease-in-out infinite;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
