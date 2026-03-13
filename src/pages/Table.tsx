import ProductSection from '@/components/ProductSection';
import { tableProducts } from '@/data/products';

const Table = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6">
            Stunning <span className="text-secondary">Tables</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Center pieces that bring your room together with style and function
          </p>
        </div>
      </section>

      <ProductSection
        id="table"
        title="Our Table Collection"
        subtitle="Find the perfect table for every room in your home"
        products={tableProducts}
      />
    </main>
  );
};

export default Table;
