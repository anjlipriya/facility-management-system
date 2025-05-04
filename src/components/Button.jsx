// src/components/Button.jsx
import { Link } from 'react-router-dom';

const Button = ({ children, to, onClick, variant = 'primary', className = '', type = 'button' }) => {
  // Base styles for all buttons
  const baseStyles = "py-3 px-8 font-medium rounded-full transition duration-300 inline-flex items-center justify-center text-center";
  
  // Different style variants
  const variants = {
    primary: "bg-blue-800 hover:bg-blue-900 text-white shadow-md",
    secondary: "bg-blue-500 hover:bg-blue-600 text-white shadow-md",
    outline: "border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white",
  };
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;
  
  // If "to" prop is provided, render a Link component
  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  // Otherwise, render a button element
  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;







