import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Symbol */}
      <div className={`${sizeClasses[size]} bg-primary rounded-xl flex items-center justify-center shadow-md`}>
        <span className="text-primary-foreground font-manrope font-bold text-lg leading-none">
          Z
        </span>
      </div>
      
      {/* Wordmark */}
      {showText && (
        <span className={`font-manrope font-bold text-zap-charcoal ${textSizeClasses[size]} tracking-tight`}>
          ZapSalesPro
        </span>
      )}
    </div>
  );
};

export default Logo;