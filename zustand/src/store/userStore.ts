import type { StateCreator } from "zustand";
// import { create } from "zustand";

 type UserState = {
    username: string,
    fullname: string,
    age: number,
    address: string,
};

 type UserActions = {
    setAddress: (address: string) => void,
};

export type UserStore = UserState & UserActions;

export const createUser: StateCreator<UserStore, [], [], UserStore> = (set) => ({
    address: '',
    age: 0,
    fullname: '',
    username: "",
     setAddress:(address) => set((state) => ( {...state , address}))
})


// const useCountStore = create<{ nested: { count: number }; inc: () => void }>(
//     (set) => ({ nested: { count: 0 },
//     inc: () => set((state) => ({
//         nested: { ...state.nested, count: state.nested.count + 1 }
//     })
//     )
// }))


