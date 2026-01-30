import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      
      setAuth: (user, token) => set({ user, token, isAuthenticated: true }),
      logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        set({ user: null, token: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product, quantity = 1, size, color) => {
        const items = get().items;
        const existingItem = items.find(
          (item) => item.product._id === product._id && item.size === size && item.color === color
        );
        
        if (existingItem) {
          set({
            items: items.map((item) =>
              item.product._id === product._id && item.size === size && item.color === color
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({ items: [...items, { product, quantity, size, color }] });
        }
      },
      
      removeItem: (productId, size, color) => {
        set({
          items: get().items.filter(
            (item) => !(item.product._id === productId && item.size === size && item.color === color)
          ),
        });
      },
      
      updateQuantity: (productId, size, color, quantity) => {
        if (quantity === 0) {
          get().removeItem(productId, size, color);
        } else {
          set({
            items: get().items.map((item) =>
              item.product._id === productId && item.size === size && item.color === color
                ? { ...item, quantity }
                : item
            ),
          });
        }
      },
      
      clearCart: () => set({ items: [] }),
      
      getTotal: () => {
        return get().items.reduce((total, item) => {
          const price = item.product.discountPrice || item.product.price;
          return total + price * item.quantity;
        }, 0);
      },
      
      getItemsCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
