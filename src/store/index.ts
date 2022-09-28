import { ThemeNames } from "src/context/theme";
import { MainNavNames } from "src/types/main-nav";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

export type MainNavContextValue = {
  mainNav: MainNavNames;
  setMainNav: any;
};

interface AppState {
  mainNav: MainNavNames;
  setMainNav: (name: MainNavNames) => void;
  theme: ThemeNames;
  setSelectedTheme: (theme: ThemeNames) => void;
  toggleTheme: () => void;
}

const useStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        mainNav: "none",
        setMainNav: (mainNav) => set((state) => ({ mainNav })),
        theme: "light",
        setSelectedTheme: (theme) => set((state) => ({ theme })),
        toggleTheme: () =>
          set((state) => ({
            theme: state.theme === "light" ? "dark" : "light",
          })),
      }),
      {
        name: "whoisryosuke-store",
      }
    )
  )
);

export default useStore;
