import { create } from "zustand";
import { createUser } from "./userStore";
import type { Store } from "@/types/store";
import { immer } from "zustand/middleware/immer";

export const useStore = create<Store>()(immer((...a) => ({
    ...createUser(...a),
}))
);

