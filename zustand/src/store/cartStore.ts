import type { Product } from "@/types/product";
import { StateCreator } from "zustand";

type CartState = {
    products: (Product & { qnty: number })[];
    total: number;

};

type CartActions = {
    
}

