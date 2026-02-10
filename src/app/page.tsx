import Link from 'next/link';
import { ShoppingBag, Sparkles, Shield, Truck } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl">🪔</span>
              <span className="text-2xl font-display font-bold text-primary-600">
                Kumkum Vastr
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/products" className="text-gray-700 hover:text-primary-600 transition">
                Products
              </Link>
              <Link href="/collections" className="text-gray-700 hover:text-primary-600 transition">
                Collections
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-primary-600 transition">
                Categories
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 transition">
                About
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition">
                <ShoppingBag className="w-6 h-6" />
              </Link>
              <Link href="/auth/login" className="btn-primary">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-indian text-white py-32 indian-pattern">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-indian-gold" />
              <span className="text-lg font-semibold">Premium Quality</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Embrace The Beauty of Indian Heritage
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Discover exquisite ethnic wear that celebrates tradition with contemporary elegance
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition inline-flex items-center">
                Shop Collection
                <ShoppingBag className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/collections" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg transition">
                View Collections
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Authentic</h3>
              <p className="text-gray-600">
                Premium quality fabrics and traditional craftsmanship guaranteed
              </p>
            </div>

            <div className="card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Truck className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">
                Cash on delivery available across India
              </p>
            </div>

            <div className="card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Sparkles className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Handpicked Designs</h3>
              <p className="text-gray-600">
                Curated collection of timeless and trendy ethnic wear
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Start Your Journey with Kumkum Vastr
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Create an account to explore our exclusive collections and enjoy personalized shopping experience
          </p>
          <Link href="/auth/register" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition inline-block">
            Register Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-3xl">🪔</span>
                <span className="text-xl font-display font-bold">Kumkum Vastr</span>
              </div>
              <p className="text-gray-400">
                Premium Indian ethnic wear celebrating tradition with modern elegance
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Shop</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/products" className="hover:text-white transition">All Products</Link></li>
                <li><Link href="/collections" className="hover:text-white transition">Collections</Link></li>
                <li><Link href="/categories" className="hover:text-white transition">Categories</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Customer</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/account" className="hover:text-white transition">My Account</Link></li>
                <li><Link href="/orders" className="hover:text-white transition">Orders</Link></li>
                <li><Link href="/cart" className="hover:text-white transition">Cart</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Kumkum Vastr. All rights reserved.</p>
            <p className="mt-2">Made with ❤️ for Indian Fashion</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
