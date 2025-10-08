import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context';

const CartIcon: React.FC = () => {
  const { getTotalItems } = useCart();

  return (
    <Link to="/cart" className="relative">
      <i className="fas fa-shopping-cart text-xl text-blue-700"></i>
      {getTotalItems() > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {getTotalItems()}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
