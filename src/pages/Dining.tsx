import { useEffect, useState } from 'react';
import ProductSection from '@/components/ProductSection';
import api from '@/lib/axios';

const Dining = () => {
  const [diningProducts, setDiningProducts] = useState([]);

  useEffect(() => {
    const fetchDiningProducts = async () => {
      try {
        const res = await api.get('/products/category/dining');
        setDiningProducts(res.data.data);
      } catch (error) {
        console.error('Error fetching dining products:', error);
      }
    };

    fetchDiningProducts();
  }, []);

  return (
    <main className='pt-20'>
      {/* Hero Section */}
      <section className='py-20 bg-primary'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6'>
            Dining <span className='text-secondary'>Collections</span>
          </h1>
          <p className='text-xl text-primary-foreground/80 max-w-3xl mx-auto'>
            Gather around beautiful dining tables designed for memorable moments
          </p>
        </div>
      </section>

      <ProductSection
        id='dining'
        title='Our Dining Collection'
        subtitle='Create memorable dining experiences with our elegant furniture'
        products={diningProducts}
      />
    </main>
  );
};

export default Dining;
