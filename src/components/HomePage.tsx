import React from 'react';
import { motion } from 'motion/react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Autoplay from 'embla-carousel-autoplay';

interface HomePageProps {
  onGetStarted: () => void;
}

export function HomePage({ onGetStarted }: HomePageProps) {
  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1620019989479-d52fcedd99fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3NjIwNjM4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'Eat Smart. Live Better.'
    },
    {
      url: 'https://images.unsplash.com/photo-1675962292427-062dc596171e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9vdGhpZSUyMGJvd2wlMjBmcnVpdHxlbnwxfHx8fDE3NjIwODI3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'Nourish Your Body, Feed Your Soul.'
    },
    {
      url: 'https://images.unsplash.com/photo-1610533514079-58a2c1436725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwaGVhbHRoeSUyMG1lYWx8ZW58MXx8fHwxNzYxOTkyNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'Healthy Cooking, Happy Living.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1631021967261-c57ee4dfa9bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzYyMDcxMjk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Healthy foods background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 via-emerald-900/70 to-purple-900/80" />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white mb-6"
          >
            Welcome to a Healthier You with Nutritionary
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Discover personalized recipes for better health, weight management, and disease care.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={onGetStarted}
            className="px-10 py-4 bg-white text-teal-600 rounded-full shadow-2xl hover:shadow-3xl transition-all"
          >
            Get Started 🚀
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Carousel Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent"
          >
            Your Journey to Wellness Starts Here
          </motion.h2>

          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {carouselImages.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative h-80 rounded-2xl overflow-hidden shadow-xl group"
                  >
                    <ImageWithFallback
                      src={item.url}
                      alt={item.quote}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center pb-8">
                      <p className="text-white text-center px-4">
                        {item.quote}
                      </p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
