import { create } from 'zustand';
import { persist } from "zustand/middleware";
import { StoreState } from '../interfaces';

export const useStore = create<StoreState>()(
    persist(
        (set, get) => ({
            products: [],
            favorites: [],
            isLoading: false,
            error: null,
            fetchData: async (SERVER_URI) => {
                if (get().isLoading || get().products.length > 0) {
                    return;
                }

                set({ isLoading: true, error: null })

                try {
                    const response = await fetch(SERVER_URI);
                    const jsonData = await response.json();
                    set({ products: jsonData.results, isLoading: false });
                }
                catch (e) {
                    set({ error: e as Error, isLoading: false });
                }
            },
            toggleLike: (id) => {
                const { favorites } = get();
                if (favorites.includes(id)) {
                    set({ favorites: favorites.filter(fid => fid !== id) });
                } else {
                    set({ favorites: [...favorites, id] });
                }
            },
            addProduct: (formData) => set((state) => ({
                products: [formData, ...state.products]
            })),
            removeProduct: (id) => set((state) => ({
                products: state.products.filter(p => p.id !== id),
                favorites: state.favorites.filter(fid => fid !== id),
            }))
        }), { name: 'product-storage' }
    )
);