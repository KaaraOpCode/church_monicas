import React, { ReactNode } from 'react';

interface CardProps {
  title?: string;
  image?: string;
  alt?: string;
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  image, 
  alt = 'Card image', 
  children, 
  className = '' 
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={alt} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-xl font-semibold mb-3">{title}</h3>}
        <div className="text-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
