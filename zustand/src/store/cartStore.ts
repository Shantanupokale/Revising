import type { cartProduct } from "@/types/cartProduct";
import type { Product } from "@/types/product";
import { StateCreator } from "zustand";

type CartState = {
    products: cartProduct[];
    total: number;

};

type CartActions = {
    addProduct: (product: Product) => void;
    removeproduct: (productId: string) => void;
    incQty: (productId: string) => void;
    decQty: (productId: string) => void;
    getProductbyId: (productId: string) => cartProduct | undefined
    setTotal: (total: number) => void;
    reset: () => void;
};

export type CartSlice = CartState & CartActions

const initialState: CartState = {
    products: [],
    total: 0,
}



export const cerateCartSlice: StateCreator<CartSlice, [], [], CartSlice> = (set) => ({
    ...initialState, incQty(product) => set((state) =>
    const
    )
})