import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, align = 'left' }) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <div className="inline-block px-2 py-1 mb-4 text-xs font-bold text-black uppercase bg-neon font-mono">
          {`// ${subtitle}`}
        </div>
      )}
      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-white">
        {title}
      </h2>
      <div className={`h-1 w-24 bg-neon mt-4 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};