import { useEffect, useState } from 'react';
import ProductSection from '../components/ProductSection';
import api from '../lib/axios';

const Products = () => {
  const [sofaProducts, setSofaProducts] = useState([]);
  const [chairProducts, setChairProducts] = useState([]);
  const [tableProducts, setTableProducts] = useState([]);
  const [officeProducts, setOfficeProducts] = useState([]);
  const [diningProducts, setDiningProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [sofasRes, chairsRes, tablesRes, officeRes, diningRes] =
          await Promise.all([
            api.get('api/products/category/sofa'),
            api.get('api/products/category/chair'),
            api.get('api/products/category/table'),
            api.get('api/products/category/office'),
            api.get('api/products/category/dining'),
          ]);

        // ⚠️ Important: your backend returns { success, data }
        setSofaProducts(sofasRes.data.data);
        setChairProducts(chairsRes.data.data);
        setTableProducts(tablesRes.data.data);
        setOfficeProducts(officeRes.data.data);
        setDiningProducts(diningRes.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className='pt-20'>
      {/* Hero Section */}
      <section className='py-20 bg-primary'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6'>
            All <span className='text-secondary'>Products</span>
          </h1>
          <p className='text-xl text-primary-foreground/80 max-w-3xl mx-auto'>
            Explore our complete furniture collection - from luxurious sofas to
            elegant dining sets
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className='py-6 bg-muted/50 sticky top-20 z-40 border-b'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap justify-center gap-3'>
            <a
              href='#sofas'
              className='px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors'
            >
              Sofas
            </a>
            <a
              href='#chairs'
              className='px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors'
            >
              Chairs
            </a>
            <a
              href='#tables'
              className='px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors'
            >
              Tables
            </a>
            <a
              href='#office'
              className='px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors'
            >
              Office
            </a>
            <a
              href='#dining'
              className='px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors'
            >
              Dining
            </a>
          </div>
        </div>
      </section>

      {/* All Product Sections */}
      <ProductSection
        id='sofas'
        title='Luxurious Sofas'
        subtitle='Sink into comfort with our premium sofa collection'
        products={sofaProducts}
      />

      <div className='bg-muted/30'>
        <ProductSection
          id='chairs'
          title='Elegant Chairs'
          subtitle='From accent pieces to ergonomic office chairs'
          products={chairProducts}
        />
      </div>

      <ProductSection
        id='tables'
        title='Stunning Tables'
        subtitle='Center pieces that bring your room together'
        products={tableProducts}
      />

      <div className='bg-muted/30'>
        <ProductSection
          id='office'
          title='Office Furniture'
          subtitle='Create a productive workspace'
          products={officeProducts}
        />
      </div>

      <ProductSection
        id='dining'
        title='Dining Sets'
        subtitle='Elegant dining solutions for your home'
        products={diningProducts}
      />
    </main>
  );
};

export default Products;
