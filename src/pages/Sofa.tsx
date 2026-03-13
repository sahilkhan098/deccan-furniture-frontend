import ProductSection from '@/components/ProductSection';
import { sofaProducts } from '@/data/products';

const Sofa = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6">
            Luxurious <span className="text-secondary">Sofas</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Sink into comfort with our premium collection of handcrafted sofas designed for ultimate relaxation
          </p>
        </div>
      </section>

      <ProductSection
        id="sofa"
        title="Our Sofa Collection"
        subtitle="Explore our wide range of elegant and comfortable sofas"
        products={sofaProducts}
      />
    </main>
  );
};

export default Sofa;
