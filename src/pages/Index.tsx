import Hero from '@/components/Hero';
import heroImage from '@/assets/hero-furniture.jpg';

const Index = () => {
  return (
    <main>
      <Hero heroImage={heroImage} />

      {/* Features Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Why Choose <span className="text-secondary">Deccan Furniture?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 opacity-0 animate-fade-in" style={{ animationDelay: '0ms' }}>
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-secondary text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-3">Premium Quality</h3>
              <p className="text-primary-foreground/70">Handcrafted from the finest materials for lasting durability</p>
            </div>
            <div className="text-center p-8 opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-secondary text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-3">Free Delivery</h3>
              <p className="text-primary-foreground/70">Complimentary delivery and installation across the city</p>
            </div>
            <div className="text-center p-8 opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-secondary text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-3">5-Year Warranty</h3>
              <p className="text-primary-foreground/70">Complete peace of mind with our comprehensive warranty</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
