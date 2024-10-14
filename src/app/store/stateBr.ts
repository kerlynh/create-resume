import { create } from "zustand";
import { fetchRegion } from "@/domain/api/region";

interface stateBrState {
  aliasState: string[];
  isLoading: boolean;
  error: string | null;
  getAliasState: () => void;
}

export const useStateBrStore = create<stateBrState>((set) => ({
  aliasState: [],
  isLoading: false,
  error: null,
  getAliasState: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetchRegion();
      set({ aliasState: response, isLoading: false });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ error: "Failed get alias region", isLoading: false });
    }
  },
}));
