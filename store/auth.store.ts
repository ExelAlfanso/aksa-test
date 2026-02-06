import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  name: string;
  password: string;
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  login: (name: string, password: string) => void;
  logout: () => void;
  updateName: (name: string) => void;
  updatePassword: (password: string) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: (name, password) =>
        set({
          user: { name, password },
          isAuthenticated: true,
        }),

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),

      updateName: (name) =>
        set((state) => ({
          user: state.user ? { ...state.user, name } : null,
        })),
      updatePassword: (password) =>
        set((state) => ({
          user: state.user ? { ...state.user, password } : null,
        })),
    }),
    {
      name: "auth-storage", // localStorage key
    },
  ),
);
