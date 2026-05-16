import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import corporate_brochure from '@/assets/Sriven_Corporate_Brochure.pdf';
import retail_brochure from '@/assets/Sriven_Brochure .pdf';
import { FileText } from 'lucide-react';

export const FloatingBrochure = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark shadow-xl flex items-center gap-2 rounded-full"
          >
            <FileText className="h-5 w-5" />
            <span className="hidden md:inline">Brochures</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <a 
            href={corporate_brochure} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full"
          >
            <DropdownMenuItem className="cursor-pointer">
              Corporate Brochure
            </DropdownMenuItem>
          </a>
          <a 
            href={retail_brochure} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full"
          >
            <DropdownMenuItem className="cursor-pointer">
              Retail Brochure
            </DropdownMenuItem>
          </a>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
