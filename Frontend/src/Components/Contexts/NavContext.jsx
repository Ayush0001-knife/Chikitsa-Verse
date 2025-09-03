import { createContext, useState, useContext } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [activePage, setActivePage] = useState("patients");

  return (
    <NavContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);
