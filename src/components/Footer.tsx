import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">
              Deccan <span className="text-secondary">Furniture</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Crafting premium furniture with passion and precision. Transform your space with our exquisite collection.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/deccan_furniture?igsh=MXB2emFqNXF4MDJmYQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 hover:bg-secondary p-2 rounded-full transition-colors group"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} className="text-primary-foreground group-hover:text-secondary-foreground" />
              </a>
              <a
                href="https://www.facebook.com/deccanfurniture"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 hover:bg-secondary p-2 rounded-full transition-colors group"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} className="text-primary-foreground group-hover:text-secondary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                About Us
              </Link>
              <Link to="/gallery" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                Gallery
              </Link>
              <Link to="/contact" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Categories</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/#sofa" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                Sofas
              </Link>
              <Link to="/#chair" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                Chairs
              </Link>
              <Link to="/#table" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                Tables
              </Link>
              <Link to="/#office" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                Office Furniture
              </Link>
              <Link to="/#dining" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                Dining Tables
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  Deccan Furniture, Nanded, Maharashtra, India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <a href="tel:9699476365" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                  +91 9699476365
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">info@deccanfurniture.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">Mon - Sat: 10AM - 8PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Deccan Furniture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
