import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Minus, Plus, CreditCard, Banknote, Smartphone, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    name: string;
    image: string;
    originalPrice: number;
    offerPrice: number;
  } | null;
}

const OrderModal = ({ isOpen, onClose, product }: OrderModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const { toast } = useToast();

  if (!product) return null;

  const totalPrice = product.offerPrice * quantity;

  const handleOrder = () => {
    const paymentText = paymentMethod === 'cod' 
      ? 'Cash on Delivery' 
      : paymentMethod === 'upi' 
      ? 'UPI Payment' 
      : 'Card Payment';

    const message = `
🛒 *New Order*

*Product:* ${product.name}
*Quantity:* ${quantity}
*Price:* ₹${product.offerPrice.toLocaleString()} x ${quantity}
*Total:* ₹${totalPrice.toLocaleString()}

*Customer Details:*
Name: ${customerName}
Phone: ${customerPhone}
Address: ${customerAddress}

*Payment Method:* ${paymentText}
    `.trim();

    window.open(
      `https://wa.me/919699476365?text=${encodeURIComponent(message)}`,
      '_blank'
    );
    
    // Show success message
    toast({
      title: "🎉 Order Placed Successfully!",
      description: `Thank you ${customerName}! Your order for ${product.name} has been sent. We'll contact you shortly on WhatsApp.`,
      duration: 5000,
    });
    
    onClose();
    // Reset form
    setQuantity(1);
    setCustomerName('');
    setCustomerPhone('');
    setCustomerAddress('');
    setPaymentMethod('cod');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-background max-h-[90vh] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="text-foreground">Order Product</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 overflow-y-auto flex-1 pr-2">
          {/* Product Info */}
          <div className="flex gap-4 p-3 bg-muted/50 rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <h4 className="font-medium text-foreground">{product.name}</h4>
              <p className="text-secondary font-semibold">
                ₹{product.offerPrice.toLocaleString()}
              </p>
              <p className="text-muted-foreground text-sm line-through">
                ₹{product.originalPrice.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="space-y-2">
            <Label>Quantity</Label>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
              <span className="ml-auto text-lg font-bold text-secondary">
                Total: ₹{totalPrice.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Customer Details */}
          <div className="space-y-3">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                placeholder="Enter phone number"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="address">Delivery Address</Label>
              <Input
                id="address"
                placeholder="Enter delivery address"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-2">
            <Label>Payment Method</Label>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-2">
              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="cod" id="cod" />
                <Banknote className="h-5 w-5 text-secondary" />
                <Label htmlFor="cod" className="flex-1 cursor-pointer">Cash on Delivery</Label>
              </div>
              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="upi" id="upi" />
                <Smartphone className="h-5 w-5 text-secondary" />
                <Label htmlFor="upi" className="flex-1 cursor-pointer">UPI Payment</Label>
              </div>
              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="card" id="card" />
                <CreditCard className="h-5 w-5 text-secondary" />
                <Label htmlFor="card" className="flex-1 cursor-pointer">Card Payment</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Submit Button */}
          <Button
            variant="secondary"
            className="w-full"
            onClick={handleOrder}
            disabled={!customerName || !customerPhone || !customerAddress}
          >
            Place Order via WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
