import { MainNavNames } from 'src/types/main-nav';
import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export type MainNavContextValue = {
  mainNav: MainNavNames;
  setMainNav: any;
};

interface AppState {
  mainNav: MainNavNames
  setMainNav: (name: MainNavNames) => void
}

const useStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        mainNav: 'none',
        setMainNav: (mainNav) => set((state) => ({ mainNav })),
      }),
      {
        name: 'whoisryosuke-store',
      }
    )
  )
)

export default useStore