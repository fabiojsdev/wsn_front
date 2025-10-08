import { useState, type ReactNode } from "react";

import { CartContext } from "./CartContext";
import type { Product } from "./cart-types";

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.ref === product.ref);

      if (existingItem) {
        return prevItems.map((item) =>
          item.ref === product.ref
            ? { ...item, quantidade: (item.quantidade || 1) + 1 }
            : item,
        );
      }

      return [...prevItems, { ...product, quantidade: 1 }];
    });
  };

  const removeFromCart = (ref: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.ref !== ref));
  };

  const updateQuantity = (ref: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(ref);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.ref === ref ? { ...item, quantidade: quantity } : item,
      ),
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
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
