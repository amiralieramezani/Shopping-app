import { createContext, useContext, useEffect, useState } from "react";

export const ThemeProviderContext = createContext();

export const ThemeProviderContextDispatcher = createContext();

function ThemeProvider({ children }) {
  let initialValues = {
    selected: "system",
    used: "system",
    class: "system",
  };
  if (
    "color-theme" in localStorage &&
    (localStorage.getItem("color-theme") === "dark" ||
      localStorage.getItem("color-theme") === "light" ||
      localStorage.getItem("color-theme") === "system")
  ) {
    let theme = localStorage.getItem("color-theme");
    initialValues = {
      selected: theme,
      used: theme,
      class: theme,
    };
  }
  const [theme, setTheme] = useState(initialValues);

  switch (theme.selected) {
    case "dark": {
      setTheme({ used: "dark", class: "dark" });
      localStorage.setItem("color-theme", "dark");
      break;
    }
    case "light": {
      setTheme({ used: "light", class: "light" });
      localStorage.setItem("color-theme", "light");
      break;
    }
    case "system": {
      let systemTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
          let systemTheme = e.matches;
          if (systemTheme) {
            setTheme({ used: "system", class: "dark" });
            localStorage.setItem("color-theme", "dark");
          } else {
            setTheme({ used: "system", class: "light" });
            localStorage.setItem("color-theme", "light");
          }
        });
      if (systemTheme) {
        setTheme({ used: "system", class: "dark" });
      } else {
        setTheme({ used: "system", class: "light" });
      }
      localStorage.setItem("color-theme", "system");
      break;
    }
    default:
      break;
  }

  return (
    <ThemeProviderContext.Provider value={theme}>
      <ThemeProviderContextDispatcher.Provider value={setTheme}>
        {children}
      </ThemeProviderContextDispatcher.Provider>
    </ThemeProviderContext.Provider>
  );
}

export default ThemeProvider;

export const useTheme = () => useContext(ThemeProviderContext);

export const useThemeActions = () => useContext(ThemeProviderContextDispatcher);
