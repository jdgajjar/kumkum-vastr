import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore, useAuthStore } from '@/context/useStore';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const itemsCount = useCartStore((state) => state.getItemsCount());
  const { isAuthenticated, user, logout } = useAuthStore();

  const categories = ['Sarees', 'Kurtis', 'Lehengas', 'Suits'];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-kumkum-600 to-maroon-600 text-white py-2 text-center text-sm">
        <p>✨ Free Shipping on Orders Above ₹999 | COD Available ✨</p>
      </div>

      {/* Main Header */}
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl md:text-3xl font-serif font-bold text-kumkum-600">
              🌺 Kumkum Vastr
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/products?category=${category}`}
                className="text-gray-700 hover:text-kumkum-600 font-medium transition-colors"
              >
                {category}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search size={20} className="text-gray-700" />
            </button>
            
            {isAuthenticated ? (
              <div className="relative group">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-2">
                  <User size={20} className="text-gray-700" />
                  <span className="hidden md:inline text-sm">{user?.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                  <Link to="/orders" className="block px-4 py-2 hover:bg-gray-100">Orders</Link>
                  <button onClick={logout} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <User size={20} className="text-gray-700" />
              </Link>
            )}

            <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingCart size={20} className="text-gray-700" />
              {itemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-kumkum-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemsCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t"
          >
            <div className="container-custom py-4 space-y-2">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/products?category=${category}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 px-4 hover:bg-gray-100 rounded-md"
                >
                  {category}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
