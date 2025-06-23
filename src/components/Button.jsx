import './Button.css'; // We'll style it later

function Button({ variant = 'primary', children, onClick }) {
  const baseStyles = 'px-4 py-2 rounded';
  const variantStyles = {
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-gray-500 text-white',
    danger: 'bg-red-600 text-white',
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;