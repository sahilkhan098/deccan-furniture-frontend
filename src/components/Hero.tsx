import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountUp from './CountUp';

interface HeroProps {
  heroImage: string;
}

const Hero = ({ heroImage }: HeroProps) => {
  const scrollToStats = () => {
    const element = document.getElementById('stats-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <div className="space-y-6 opacity-0 animate-fade-in">
            <span className="inline-block text-secondary font-medium tracking-widest uppercase text-sm">
              Premium Furniture Collection
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground leading-tight">
             @<span className="text-secondary">Powered By Sahil Khan</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl">
              Discover handcrafted furniture that combines timeless elegance with modern comfort. Transform your home into a masterpiece.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Link
              to="/sofa"
              className="btn-rose inline-flex items-center justify-center gap-2"
            >
              Explore Collection
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Stats */}
          <div id="stats-section" className="grid grid-cols-3 gap-8 mt-16 opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary">
                <CountUp end={1000} duration={2500} suffix="+" />
              </div>
              <div className="text-primary-foreground/60 text-sm mt-1">Products</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary">
                <CountUp end={25} duration={2000} suffix="+" />
              </div>
              <div className="text-primary-foreground/60 text-sm mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary">
                <CountUp end={1000000} duration={3000} suffix="+" />
              </div>
              <div className="text-primary-foreground/60 text-sm mt-1">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToStats}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-secondary transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
