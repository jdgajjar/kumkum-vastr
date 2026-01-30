import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Truck, RefreshCw } from 'lucide-react';
import ProductCard from '@/components/common/ProductCard';
import { productAPI } from '@/services/api';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [featured, bestsellers] = await Promise.all([
          productAPI.getFeatured(),
          productAPI.getBestSellers(),
        ]);
        
        setFeaturedProducts(featured.data.products);
        setBestSellers(bestsellers.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = [
    { name: 'Sarees', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400', link: '/products?category=Sarees' },
    { name: 'Kurtis', image: 'https://images.unsplash.com/photo-1583391733981-5aba0d6038c6?w=400', link: '/products?category=Kurtis' },
    { name: 'Lehengas', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400', link: '/products?category=Lehengas' },
    { name: 'Suits', image: 'https://images.unsplash.com/photo-1617201277988-f0efcc14e626?w=400', link: '/products?category=Suits' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-kumkum-50 via-maroon-50 to-gold-50 overflow-hidden">
        <div className="container-custom py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <span className="bg-kumkum-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  New Collection 2024
                </span>
              </div>
              
              <h1 className="heading-1 mb-6 text-balance">
                Celebrate Your 
                <span className="text-kumkum-600"> Traditions</span>
                <br />
                With Elegance
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Discover exquisite collection of authentic Indian ethnic wear.
                From vibrant sarees to elegant kurtis, find your perfect traditional outfit.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="btn-primary inline-flex items-center gap-2 group">
                  Shop Now
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/products?isFeatured=true" className="btn-secondary">
                  Explore Collection
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div>
                  <div className="text-3xl font-bold text-kumkum-600">10K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-kumkum-600">500+</div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-kumkum-600">4.8★</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1617201277988-f0efcc14e626?w=600"
                  alt="Indian Ethnic Wear"
                  className="rounded-2xl shadow-2xl w-full"
                />
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-gold-100 p-3 rounded-full">
                      <Sparkles className="text-gold-600" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Special Offer</div>
                      <div className="text-xl font-bold text-kumkum-600">Flat 30% OFF</div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-10 -right-10 w-40 h-40 bg-kumkum-200 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold-200 rounded-full blur-3xl opacity-50 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 border-y">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: '100% Authentic', desc: 'Original Products' },
              { icon: Truck, title: 'Free Shipping', desc: 'On orders above ₹999' },
              { icon: RefreshCw, title: 'Easy Returns', desc: '7-day return policy' },
              { icon: Sparkles, title: 'Premium Quality', desc: 'Handpicked collection' },
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <badge.icon className="mx-auto mb-3 text-kumkum-600" size={32} />
                <h3 className="font-semibold text-gray-900 mb-1">{badge.title}</h3>
                <p className="text-sm text-gray-600">{badge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated collection of traditional Indian wear
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={category.link}
                  className="group block relative overflow-hidden rounded-xl aspect-square"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-white text-2xl font-serif font-bold mb-2">
                        {category.name}
                      </h3>
                      <span className="text-white text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">🏆 Best Sellers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Customer favorites that define elegance and style
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="spinner"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bestSellers.slice(0, 4).map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link to="/products?isBestSeller=true" className="btn-outline">
              View All Best Sellers
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">✨ Featured Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked pieces that showcase the best of Indian craftsmanship
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="spinner"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.slice(0, 4).map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link to="/products?isFeatured=true" className="btn-outline">
              Explore Featured
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-kumkum-600 to-maroon-700 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-white">
              Join the Kumkum Vastr Family
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
              Subscribe to get special offers, free giveaways, and exclusive deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-md text-gray-900"
              />
              <button className="bg-white text-kumkum-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
