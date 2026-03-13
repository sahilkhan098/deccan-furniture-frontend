import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, ShoppingBag } from 'lucide-react';
import OrderModal from './OrderModal';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  originalPrice: number;
  offerPrice: number;
  description: string;
}

const ProductCard = ({ id, image, name, originalPrice, offerPrice, description }: ProductCardProps) => {
  const discount = Math.round(((originalPrice - offerPrice) / originalPrice) * 100);
  const { addToCart, setIsCartOpen } = useCart();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart({ id, name, image, originalPrice, offerPrice });
    toast({
      title: "Added to Cart!",
      description: `${name} has been added to your cart.`,
    });
    setIsCartOpen(true);
  };

  return (
    <>
      <div className="product-card group">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={image}
            alt={name}
            className="product-image w-full h-full object-cover"
          />
          {/* Discount Badge */}
          <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {discount}% OFF
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-secondary transition-colors">
            {name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {description}
          </p>
          <div className="flex items-center gap-3 pt-2">
            <span className="text-2xl font-bold text-secondary">
              ₹{offerPrice.toLocaleString()}
            </span>
            <span className="text-muted-foreground line-through text-sm">
              ₹{originalPrice.toLocaleString()}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-3">
            <Button
              variant="outline"
              className="flex-1 gap-2"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
            <Button
              variant="secondary"
              className="flex-1 gap-2"
              onClick={() => setIsOrderModalOpen(true)}
            >
              <ShoppingBag className="h-4 w-4" />
              Order
            </Button>
          </div>
        </div>
      </div>

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        product={{ id, name, image, originalPrice, offerPrice }}
      />
    </>
  );
};

export default ProductCard;
