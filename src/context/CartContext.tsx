import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
export interface Product {
  ref: string;
  nome: string;
  unidade: string;
  imagem?: string;
  quantidade?: number;
}

interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (ref: string) => void;
  updateQuantity: (ref: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.ref === product.ref);

      if (existingItem) {
        return prevItems.map(item =>
          item.ref === product.ref
            ? { ...item, quantidade: (item.quantidade || 1) + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantidade: 1 }];
    });
  };

  const removeFromCart = (ref: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.ref !== ref));
  };

  const updateQuantity = (ref: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(ref);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.ref === ref ? { ...item, quantidade: quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + (item.quantidade || 1), 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
