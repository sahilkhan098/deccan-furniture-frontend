import { Award, Users, Heart, Clock } from 'lucide-react';

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6">
            About <span className="text-secondary">Deccan Furniture</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Crafting premium furniture with passion and precision since 2009
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="opacity-0 animate-fade-in-left" style={{ animationDelay: '0ms' }}>
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
                alt="Showroom"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="opacity-0 animate-fade-in-right" style={{ animationDelay: '200ms' }}>
              <span className="text-secondary font-medium tracking-widest uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-6">
                A Legacy of Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Deccan Furniture was born from a simple vision: to bring world-class craftsmanship 
                  to every home in India. Founded in 2009, we started as a small workshop with just 
                  three master craftsmen and a dream.
                </p>
                <p>
                  Today, we've grown into one of the region's most trusted furniture showrooms, 
                  serving over 10,000 happy customers. But our commitment remains unchanged – 
                  every piece we create is a testament to quality, durability, and timeless design.
                </p>
                <p>
                  We believe furniture is more than just functional objects. They're the backdrop 
                  to your life's most precious moments. That's why we pour our heart into every 
                  detail, from selecting the finest materials to the final finishing touches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-lg text-center opacity-0 animate-fade-in" style={{ animationDelay: '0ms' }}>
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Quality First</h3>
              <p className="text-muted-foreground text-sm">
                We never compromise on materials or craftsmanship
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-lg text-center opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Customer Focus</h3>
              <p className="text-muted-foreground text-sm">
                Your satisfaction is our ultimate measure of success
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-lg text-center opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Passion Driven</h3>
              <p className="text-muted-foreground text-sm">
                We love what we do, and it shows in every piece
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-lg text-center opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Timeless Design</h3>
              <p className="text-muted-foreground text-sm">
                Creating furniture that transcends trends
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="opacity-0 animate-scale-in" style={{ animationDelay: '0ms' }}>
              <div className="text-5xl md:text-6xl font-bold text-secondary mb-2">15+</div>
              <div className="text-primary-foreground/70">Years Experience</div>
            </div>
            <div className="opacity-0 animate-scale-in" style={{ animationDelay: '100ms' }}>
              <div className="text-5xl md:text-6xl font-bold text-secondary mb-2">10K+</div>
              <div className="text-primary-foreground/70">Happy Customers</div>
            </div>
            <div className="opacity-0 animate-scale-in" style={{ animationDelay: '200ms' }}>
              <div className="text-5xl md:text-6xl font-bold text-secondary mb-2">500+</div>
              <div className="text-primary-foreground/70">Products</div>
            </div>
            <div className="opacity-0 animate-scale-in" style={{ animationDelay: '300ms' }}>
              <div className="text-5xl md:text-6xl font-bold text-secondary mb-2">50+</div>
              <div className="text-primary-foreground/70">Expert Craftsmen</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
