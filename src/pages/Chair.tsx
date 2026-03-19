import { useEffect, useState } from 'react';
import ProductSection from '@/components/ProductSection';
import api from '@/lib/axios';

const Chair = () => {
  const [chairProducts, setChairProducts] = useState([]);

  useEffect(() => {
    const fetchChairs = async () => {
      try {
        const res = await api.get('/products/category/chair');
        setChairProducts(res.data.data);
      } catch (error) {
        console.error('Error fetching chair products:', error);
      }
    };

    fetchChairs();
  }, []);

  return (
    <main className='pt-20'>
      {/* Hero Section */}
      <section className='py-20 bg-primary'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6'>
            Elegant <span className='text-secondary'>Chairs</span>
          </h1>
          <p className='text-xl text-primary-foreground/80 max-w-3xl mx-auto'>
            From accent pieces to ergonomic office chairs, find your perfect
            seat
          </p>
        </div>
      </section>

      <ProductSection
        id='chair'
        title='Our Chair Collection'
        subtitle='Discover chairs that combine style with comfort'
        products={chairProducts}
      />
    </main>
  );
};

export default Chair;
