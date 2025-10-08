export interface Product {
  ref: string;
  nome: string;
  unidade: string;
  imagem?: string;
  quantidade?: number;
}

export interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (ref: string) => void;
  updateQuantity: (ref: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
}
