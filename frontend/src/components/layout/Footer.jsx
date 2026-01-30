import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-kumkum-400 mb-4">
              🌺 Kumkum Vastr
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted destination for authentic Indian ethnic wear. Quality, tradition, and elegance in every piece.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-kumkum-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-kumkum-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-kumkum-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Shop All</Link></li>
              <li><Link to="/products?category=Sarees" className="text-gray-400 hover:text-white transition-colors">Sarees</Link></li>
              <li><Link to="/products?category=Kurtis" className="text-gray-400 hover:text-white transition-colors">Kurtis</Link></li>
              <li><Link to="/products?category=Lehengas" className="text-gray-400 hover:text-white transition-colors">Lehengas</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-white transition-colors">Return Policy</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-kumkum-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123, Fashion Street, Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-kumkum-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-kumkum-400 flex-shrink-0" />
                <a href="mailto:support@kumkumvastr.com" className="text-gray-400 hover:text-white transition-colors">
                  support@kumkumvastr.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span> 100% Authentic Products
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Secure Payments
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Easy Returns
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Cash on Delivery
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Kumkum Vastr. All rights reserved. Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
