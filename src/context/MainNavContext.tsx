import { createContext, useContext, useState } from "react";

export type MainNavNames =
  | "none"
  | "writing"
  | "work"
  | "resouces"
  | "playlist";
export type MainNavContextValue = {
  mainNav: MainNavNames;
  setMainNav: any;
};

export const MainNavContext = createContext<MainNavContextValue>({
  mainNav: "none",
  setMainNav: null,
});

export const useMainNav = () => useContext(MainNavContext);

export interface MainNavProviderProps {}

export function MainNavProvider({
  children,
}: React.PropsWithChildren<MainNavProviderProps>) {
  const [selectedMainNav, setSelectedMainNav] = useState<MainNavNames>("none");

  const setMainNav = (name: MainNavNames) => {
    console.log("toggling mainNav", name);
    setSelectedMainNav(name);
  };

  return (
    <MainNavContext.Provider
      value={{
        mainNav: selectedMainNav,
        setMainNav,
      }}
    >
      {children}
    </MainNavContext.Provider>
  );
}
