import React, { ReactNode } from 'react';
import Image from 'next/image';

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
      <Image 
        src={image || '/default-image.jpg'}
        alt={alt} 
        width={500} // 替换为图片的实际宽度
        height={500} // 替换为图片的实际高度
        className="w-full h-full object-cover"
        />
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
