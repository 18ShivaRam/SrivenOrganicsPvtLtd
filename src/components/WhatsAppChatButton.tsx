import { Button } from '@/components/ui/button';

export const WhatsAppChatButton = () => {
  const whatsappNumber = '919392785600';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 shadow-xl flex items-center gap-2 rounded-full"
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          <span className="hidden md:inline">Chat Now</span>
        </Button>
      </a>
    </div>
  );
};
