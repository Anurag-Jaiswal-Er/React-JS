import React, { createContext, useContext } from "react";

// ye thoda diffrent context h context api wale se jo previous file mai kiya tha usse diffrent h yeha hum defaul value bhi de skte h
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {}, // ye ek method h ye humne javascript mai dekha tha ki hum object ke andar bhi function likh skte h
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}

// yeha hum sb kuch ek hi file mai kr lete h whaha hme userContext alag aur userContext Provider alag kr rahai thai
