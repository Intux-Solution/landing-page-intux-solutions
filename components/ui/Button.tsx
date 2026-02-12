import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  withArrow?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, withArrow = false, className = "", ...props }) => {
  return (
    <button 
      className={`
        bg-primary dark:bg-white text-white dark:text-primary 
        rounded-full px-6 py-3 font-semibold text-sm md:text-base 
        transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-95
        flex items-center justify-center gap-2
        ${className}
      `}
      {...props}
    >
      {children}
      {withArrow && <ArrowRight size={16} className="text-white dark:text-primary transition-colors" />}
    </button>
  );
};

export default Button;