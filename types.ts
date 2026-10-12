import React from 'react';

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
}

export interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
}