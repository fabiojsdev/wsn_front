// src/context/CartContext.ts
import { createContext, useContext } from "react";
import type { CartContextType } from "./cart-types";

/**
 * Contexto do carrinho
 * O valor real é definido pelo Provider (em outro arquivo).
 */
export const CartContext = createContext<CartContextType | undefined>(undefined);

/**
 * Hook para consumir o contexto do carrinho
 */
export const useCart = (): CartContextType => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return ctx;
};
