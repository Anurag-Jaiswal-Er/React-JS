import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./Context/theme";
import ThemeBtn from "./Componets/ThemeButton";
import Card from "./Componets/Card";

export default function App() {
  const [themeMode, setThemeMode] = useState("ligth");
  const lightTheme = () => {
    // theme.js mai ye method likhe h pr waha function ke andar kuch de ni rahai h to yeaha hum usi name se function bana denghe to kam kar jayega
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const selector = document.querySelector("html");
    selector.classList.remove("light", "dark");
    selector.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
