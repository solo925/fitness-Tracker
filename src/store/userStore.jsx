import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  isLoading: true,
  fetchUser: async () => {
    try {
      const response = await fetch("https://dummyjson.com/users/1");
      const data = await response.json();
      set({ user: data, isLoading: false });
    } catch (error) {
      console.error("Error fetching user data:", error);
      set({ isLoading: false });
    }
  },
  logout: () => {
    localStorage.removeItem("user");
    set({ user: null });
  },
}));
