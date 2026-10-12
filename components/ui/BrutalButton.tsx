import React from 'react';
import { WHATSAPP_LINK } from '../../constants';
import { ArrowUpRight } from 'lucide-react';

interface BrutalButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
}

export const BrutalButton: React.FC<BrutalButtonProps> = ({
  children,
  href = WHATSAPP_LINK,
  variant = 'primary',
  fullWidth = false,
  className = ''
}) => {
  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-lg uppercase tracking-wider transition-all duration-200 border-2 active:translate-x-1 active:translate-y-1 active:shadow-none font-mono group";

  const variants = {
    primary: "bg-neon text-black border-neon hover:bg-white hover:border-white hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]",
    secondary: "bg-white text-black border-white hover:bg-neon hover:border-neon hover:shadow-[4px_4px_0px_0px_rgba(204,255,0,0.2)] shadow-[6px_6px_0px_0px_rgba(204,255,0,1)]",
    outline: "bg-transparent text-white border-white hover:bg-white hover:text-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
    >
      {children}
      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
    </a>
  );
};