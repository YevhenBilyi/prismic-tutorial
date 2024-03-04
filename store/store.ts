// store.ts
import { create } from 'zustand';

type StoreState = {
  initialPage: string | null;
  bestOption: number;
  setInitialPage: (page: string) => void;
  setBestOption: (option: number) => void;
};

const useStore = create<StoreState>()((set) => ({
  initialPage: null,
  bestOption: 0,
  setInitialPage: (page) => set(() => ({ initialPage: page })),
  setBestOption: (option) => set(() => ({ bestOption: option })),
}));

export default useStore;