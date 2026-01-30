import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '@/context/useStore';

const ProductCard = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);
  
  const effectivePrice = product.discountPrice || product.price;
  const discount = product.discountPrice 
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product, 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card group overflow-hidden"
    >
      <Link to={`/products/${product._id}`} className="block">
        <div className="relative overflow-hidden aspect-[3/4]">
          <img
            src={product.images[0]?.url || 'https://via.placeholder.com/400x500'}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {discount > 0 && (
            <div className="absolute top-4 left-4 bg-kumkum-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {discount}% OFF
            </div>
          )}
          
          {product.isBestSeller && (
            <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              BESTSELLER
            </div>
          )}
          
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <button
              onClick={handleAddToCart}
              className="bg-white text-kumkum-600 px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 hover:bg-kumkum-600 hover:text-white"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-kumkum-600 transition-colors">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              <Star size={16} className="fill-gold-400 text-gold-400" />
              <span className="ml-1 text-sm text-gray-600">
                {product.ratings.toFixed(1)} ({product.numReviews})
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-kumkum-600">
              ₹{effectivePrice.toLocaleString('en-IN')}
            </span>
            {discount > 0 && (
              <span className="text-sm text-gray-500 line-through">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          
          {product.stock === 0 && (
            <div className="mt-2">
              <span className="text-sm text-red-600 font-medium">Out of Stock</span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
