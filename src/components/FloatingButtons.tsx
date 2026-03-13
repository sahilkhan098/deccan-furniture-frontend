import { Phone, MessageCircle } from 'lucide-react';

const PHONE_NUMBER = '9699476365';
const WHATSAPP_MESSAGE = 'Hello! I am interested in your furniture collection.';

const FloatingButtons = () => {
  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    window.open(`https://wa.me/91${PHONE_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:+91${PHONE_NUMBER}`;
  };

  return (
    <>
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="floating-btn bottom-24 right-6 bg-[#25D366] hover:bg-[#1da851] text-primary-foreground"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} fill="currentColor" />
      </button>

      {/* Call Button */}
      <button
        onClick={handleCall}
        className="floating-btn bottom-6 right-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
        aria-label="Call us"
      >
        <Phone size={24} />
      </button>
    </>
  );
};

export default FloatingButtons;
