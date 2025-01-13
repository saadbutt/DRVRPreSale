import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className = '' }: SectionProps) => {
  return (
    <section className={`py-16 px-4 ${className}`}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;