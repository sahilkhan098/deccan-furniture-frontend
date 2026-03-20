import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Products', href: '/products' },
  { name: 'Sofa', href: '/sofa' },
  { name: 'Chair', href: '/chair' },
  { name: 'Table', href: '/table' },
  { name: 'Office', href: '/office' },
  { name: 'Dining', href: '/dining' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-primary shadow-lg' : 'bg-primary/95'
        }`}
      >
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between h-20'>
            
            {/* Logo */}
            <Link
              to='/'
              className='flex items-center gap-3'
              onClick={() => setIsOpen(false)}
            >
              <img
                src={logo}
                alt='Deccan Furniture Logo'
                className='h-16 md:h-20 w-auto'
              />
              <div className='flex flex-col'>
                <span className='text-xl md:text-2xl font-serif font-bold text-primary-foreground'>
                  Deccan
                </span>
                <span className='text-sm md:text-base font-medium text-secondary tracking-wider'>
                  Furniture
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className='hidden lg:flex items-center space-x-6'>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className='text-primary-foreground/90 hover:text-red-700 hover:bg-accent/10 px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium uppercase tracking-wider'
                >
                  {item.name}
                </Link>
              ))}

              <Button
                variant='ghost'
                size='icon'
                className='relative text-primary-foreground'
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className='h-5 w-5' />
                {cartCount > 0 && (
                  <span className='absolute -top-1 -right-1 bg-secondary text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                    {cartCount}
                  </span>
                )}
              </Button>
            </div>

            {/* Mobile Controls */}
            <div className='lg:hidden flex items-center gap-2'>
              <Button
                variant='ghost'
                size='icon'
                className='relative text-primary-foreground'
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className='h-5 w-5' />
                {cartCount > 0 && (
                  <span className='absolute -top-1 -right-1 bg-secondary text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                    {cartCount}
                  </span>
                )}
              </Button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className='text-primary-foreground p-2'
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ✅ FULL SCREEN MOBILE MENU */}
      <div
        className={`fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-primary z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex flex-col p-4 space-y-2 overflow-y-auto h-full'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={handleLinkClick}
              className='text-primary-foreground text-lg py-3 px-4 rounded-lg hover:bg-accent/10 uppercase tracking-wider'
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;