import ProductSection from '@/components/ProductSection';
import { officeProducts } from '@/data/products';

const Office = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6">
            Office <span className="text-secondary">Furniture</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Create a productive workspace with our professional furniture solutions
          </p>
        </div>
      </section>

      <ProductSection
        id="office"
        title="Our Office Collection"
        subtitle="Professional furniture for your modern workspace"
        products={officeProducts}
      />
    </main>
  );
};

export default Office;
